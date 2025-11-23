"use client"

import React, { useEffect, useState } from 'react'
import { createClient } from '../lib/supabase/client'
import { MenuCard } from './menu-card'
import { ErrorModal } from './error-modal'

type MenuRow = {
  id: string
  name: string
  description?: string | null
  price: number
  img_url?: string | null
  // Supabase may return the related row as an object or as an array
  category?: { name?: string } | Array<{ name?: string }>
}

export default function MenuListClient() {
  const [items, setItems] = useState<MenuRow[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const supabase = createClient()

    const run = async () => {
      try {
        const { data, error } = await supabase
          .from('menu')
          .select('id, name, description, price, img_url, category(name)')
          .order('created_at', { ascending: false })

        if (!mounted) return
        if (error) {
          setErrorMessage(error.message || 'Failed to load menu')
          setItems([])
        } else if (Array.isArray(data)) {
          setItems(data as MenuRow[])
        }
      } catch (err: any) {
        setErrorMessage(err?.message ?? 'Error fetching menu')
        if (mounted) setItems([])
      } finally {
        if (mounted) setLoading(false)
      }
    }

    run()
    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <div className="py-12 text-center">Loading menu…</div>

  // group by category name (normalize if Supabase returned an array)
  const groups = items.reduce((acc: Record<string, MenuRow[]>, item) => {
    let catName = 'Uncategorized'
    if (Array.isArray(item.category)) {
      catName = item.category[0]?.name ?? catName
    } else if (item.category && typeof item.category === 'object') {
      catName = item.category.name ?? catName
    }

    if (!acc[catName]) acc[catName] = []
    acc[catName].push(item)
    return acc
  }, {})

  // sort category names descending
  const sortedCategories = Object.keys(groups).sort((a, b) => b.localeCompare(a))

  return (
    <>
      {errorMessage && <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} duration={0} />}

      <div className="space-y-6">
        {sortedCategories.map((cat) => (
          <section key={cat}>
            <h2 className="text-2xl font-semibold  uppercase mb-3">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {groups[cat].map((it) => (
                <MenuCard
                  key={it.id}
                  id={it.id}
                  name={it.name}
                  description={it.description ?? ''}
                  price={Number(it.price)}
                  img_url={it.img_url}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
