import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="home">
      <main className="hero">
        <div className="mark">Payload + Cloudflare</div>
        <h1>{user && 'email' in user ? `Welcome back, ${user.email}` : 'A fast CMS foundation for your new site.'}</h1>
        <p>
          This project is wired for Payload CMS, Cloudflare Workers, D1 database storage,
          and R2 media uploads, ready for content and design work.
        </p>
        <div className="actions">
          <a className="primary" href={`${payloadConfig.routes.admin}/create-first-user`}>
            Open admin
          </a>
          <a className="secondary" href="https://payloadcms.com/docs" rel="noopener noreferrer" target="_blank">
            Payload docs
          </a>
        </div>
      </main>
      <section className="status" aria-label="Deployment stack">
        <span>Workers</span>
        <span>D1</span>
        <span>R2</span>
      </section>
    </div>
  )
}
