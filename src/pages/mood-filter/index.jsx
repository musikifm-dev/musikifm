// import React from 'react'
import Divider from 'components/divider'
import { Form, InputGroup } from 'react-bootstrap'
import styles from './index.module.scss'

export default function MoodFilter() {
  return (
    <main>
      <section className={styles.createMood}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" className={styles.inputText}>
            Search
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            className={styles.input}
            placeholder="Search genre, mood or year..."
          />
        </InputGroup>
          <Divider text="OR" className="fs-4"/>
      </section>
      <section className={styles.addPlaylist}></section>
      <section className={styles.moods}></section>
    </main>
  )
}
