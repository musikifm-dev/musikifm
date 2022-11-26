import Divider from 'components/divider'
import Select from 'components/select'
import { Button } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import styles from './index.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

/* 
0=<.?.> (Kullanici secim yapmazsa 5 mood u da secilmis say)
1=VERY SAD
2=SAD
3=NORMAL
4=HAPPY
5=VERY HAPPY
*/

const moodFilterSelectOptions = [
  { value: 'sad', label: 'Sad', type: 'mood' },
  { value: 'happy', label: 'Happy', type: 'mood' },
  { value: 'punk', label: 'Punk', type: 'gender' },
  { value: 'rock', label: 'Rock', type: 'gender' },
  { value: 'rock', label: 'Rock', type: 'gender' },
  { value: '1', label: 'Very Sad', type: 'mood' },
  { value: '2', label: 'Sad', type: 'mood' },
  { value: '3', label: 'Normal', type: 'mood' },
  { value: '4', label: 'Happy', type: 'mood' },
  { value: '5', label: 'Very Happy', type: 'mood' },
]

export default function MoodFilter() {
  const [active, setActive] = useState(null)

  const handleChange = (selected) => {
    if (active !== null) {
      setActive((prev) => [...prev, selected.at(-1)])
    } else {
      setActive(selected)
    }
  }

  const handleClick = (clicked) => {
    if (active !== null) {
      setActive((prev) => [...prev, clicked])
    } else {
      setActive([clicked])
    }
  }

  return (
    <main>
      <section className={styles.createMood}>
        <Select options={moodFilterSelectOptions} onChange={handleChange} />
        <Divider text="OR" className="fs-4" />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Gender</Accordion.Header>
            <Accordion.Body>
              {moodFilterSelectOptions
                .filter((f) => f.type === 'gender')
                .map((item) => (
                  <Button
                    key={item.value}
                    onClick={() => handleClick(item)}
                    className={clsx(styles.btn, item.value === active ? styles.active : null)}
                  >
                    {item.label}
                  </Button>
                ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Mood</Accordion.Header>
            <Accordion.Body>
              {moodFilterSelectOptions
                .filter((f) => f.type === 'mood')
                .map((item) => (
                  <Button
                    key={item.value}
                    onClick={() => handleClick(item)}
                    className={clsx(styles.btn, item.value === active ? styles.active : null)}
                  >
                    {item.label}
                  </Button>
                ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Year</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <section className={styles.addPlaylist}></section>
      <section className={styles.moods}></section>
    </main>
  )
}
