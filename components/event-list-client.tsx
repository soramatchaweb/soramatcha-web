"use client"

import React, { useEffect, useState } from 'react'
import { createClient } from '../lib/supabase/client'
import { EventCard } from './event-card'
import { ErrorModal } from './error-modal'

type EventRow = {
  id: string
  name: string
  description?: string | null
  locations: string
  img_url: string
}

export default function EventListClient() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const run = async () => {
      const supabase = createClient()

      try {
        const { data, error } = await supabase
          .from('event')
          .select('id, name, description, locations, img_url')
          .order('created_at', { ascending: false })

        if (!mounted) return
        if (error) {
          // surface error to modal
          setErrorMessage(error.message || 'Failed to load events')
          setEvents([])
        } else if (Array.isArray(data)) {
          setEvents(data as EventRow[])
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error('Error fetching events', err)
        setErrorMessage(err?.message ?? 'Error fetching events')
        if (mounted) setEvents([])
      } finally {
        if (mounted) setLoading(false)
      }
    }

    run()

    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <div className="py-12 text-center">Loading events…</div>

  return (
    <>
      {errorMessage && (
        <ErrorModal message={errorMessage} onClose={() => setErrorMessage(null)} duration={0} />
      )}

      {events.length === 0 ? (
        <div className="py-12 text-center">No events found.</div>
      ) : (
        <div className="grid gap-6">
          {events.map((ev) => (
            <EventCard
              key={ev.id}
              id={ev.id}
              name={ev.name}
              description={ev.description ?? ''}
              location={ev.locations}
              imagurl={ev.img_url}
            />
          ))}
        </div>
      )}
    </>
  )
}
