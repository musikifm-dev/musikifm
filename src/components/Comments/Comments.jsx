import clsx from 'clsx'
import Icon from 'assets/svg'
import { Avatar } from 'components/ui'
import { useState, useRef } from 'react'
import { Stack } from 'react-bootstrap'
import styles from './index.module.scss'
import PropTypes from 'prop-types'
import useAutosizeTextArea from 'utils/hooks/useAutosizeTextarea'

// const INITIAL_HEIGHT = 46

export default function Comment(props) {
  const { detailData, loader } = props
  // const [sendComment] = useSendCommentMutation()
  // const { data: userData } = useGetMyDataQuery()

  // const [isExpanded, setIsExpanded] = useState(false)
  // const [commentValue, setCommentValue] = useState('')

  // const outerHeight = useRef(INITIAL_HEIGHT)
  // const textRef = useRef(null)
  // const containerRef = useRef(null)

  // const onExpand = () => {
  //   if (!isExpanded) {
  //     outerHeight.current = containerRef.current.scrollHeight
  //     setIsExpanded(true)
  //   }
  // }

  // const onChange = (e) => {
  //   setCommentValue(e.target.value)
  // }

  // const onClose = () => {
  //   setCommentValue('')
  //   setIsExpanded(false)
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('send the form data somewhere')
  // }

  // const formik = useFormik({
  //   initialValues: {
  //     userDisplayName: userData?.username, // Yorum yapan kullanicinin username i gelecek
  //     body: '', // Yorum
  //     podcast: id, // podcast id si
  //   },
  //   onSubmit(values) {
  //     const newData = {
  //       user: values.userDisplayName,
  //       review: values.body,
  //       id: values.podcast,
  //     }
  //     sendComment(newData)
  //   },
  // })

  const [value, setValue] = useState('')
  const textAreaRef = useRef(null)

  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (e) => {
    const val = e.target?.value
    setValue(val)
  }

  return (
    <div className={clsx('row', styles.wrapper)}>
      <div className="col">
        <section className={styles.post}>
          <Avatar
            size="xs"
            source="https://www.primianotucci.com/static/images/avatar-12df3081.png"
            rounded="full"
            className={styles.avatar}
          />
          <div className={styles.textarea}>
            <textarea
              id="review-text"
              className={styles.textarea__item}
              onChange={handleChange}
              ref={textAreaRef}
              rows={1}
              value={value}
            />
          </div>
        </section>
        <section className={styles.responsibility}>
          <Icon name="phone" size="24" />
          <div className={styles.responsibilityText}>
            <span className={styles.bold}>Sorumluluk reddi:</span> Yazılan yorumlar hiçbir şekilde{' '}
            <span className={styles.bold}>Musiki.fm</span>
            &apos;in görüş ve düşüncelerini yansıtmamaktadır. Küfür, argo, hakaret, ırkçılık gibi ifadeler yazan kişiyi
            bağlayıcı nitelikte olup yetkili merciler tarafından istendiği taktirde paylaşılacaktır.
          </div>
        </section>
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center mt-5">
          <Icon name="comment" className={styles.icon} />
          <div className={styles.title}>Comments</div>
          <div className={styles.comments}>{loader && detailData?.data?.attributes?.reviews?.data.length}</div>
        </Stack>
        {/* {loader &&
          detailData.data.attributes.reviews.data.map((item) => (
            <section className={styles.reviewBox} key={item.id}>
              <div className="d-flex">
                <Avatar
                  source="https://www.primianotucci.com/static/images/avatar-12df3081.png"
                  rounded="full"
                  size="sm"
                  className={styles.avatar}
                />
                <div className={styles.reviewBox__content}>
                  <Stack direction="vertical" gap={1}>
                    <Stack direction="horizontal" gap={2}>
                      <div className="fs-4 ">{item.attributes.userDisplayName}</div>
                      <div>- 17 hours</div>
                    </Stack>
                    <Button variant="dark" className={styles.reviewBox__follow}>
                      Takip et
                    </Button>
                  </Stack>
                  <div className={styles.reviewBox__review}>{item.attributes.body}</div>

                  <div className={styles.reviewersContainer}>
                    <Stack direction="horizontal" gap={3} className={styles.reviewers}>
                      <Avatar
                        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNcEHXfzqIQnOmNv4f7z7HP8H0m1WsrLKNQ&usqp=CAU"
                        size="md"
                        className={styles.avatar}
                      />
                      <Avatar
                        source="data:image/jpeg;base64,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"
                        size="md"
                        className={styles.avatar}
                      />
                      <Avatar
                        source="data:image/jpeg;base64,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"
                        size="md"
                        className={styles.avatar}
                      />
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                      <Icon name="commentPlus" className={styles.reviewers__icon} />
                      <span className={styles.reviewers__showComment}>Yorumu göster</span>
                    </Stack>
                  </div>
                </div>
              </div>
              <section className={clsx('row d-flex align-items-center', styles.footer)}>
                <Stack direction="horizontal" gap={3}>
                  {/* LOGIN OLAN KULANICININ AVATARI */}
        {/* <Avatar
                    source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNcEHXfzqIQnOmNv4f7z7HP8H0m1WsrLKNQ&usqp=CAU"
                    size="md"
                    className={styles.avatar}
                  />
                  {/* <textarea className={styles.placeholder}>Yorumu Yanıtla</textarea>  */}
        {/* <form
                    onSubmit={onSubmit}
                    ref={containerRef}
                    className={clsx(
                      styles.commentBox,
                      isExpanded ? styles.expanded : styles.collapsed,
                      commentValue.length > 0 && styles.modified,
                    )}
                    style={{
                      minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
                    }}
                  >
                    <textarea
                      ref={textRef}
                      onClick={onExpand}
                      onFocus={onExpand}
                      onChange={onChange}
                      className={styles.commentField}
                      placeholder="Yorumu Yanıtla"
                      value={commentValue}
                      name="comment"
                      id="comment"
                    />
                    <div className={styles.actions}>
                      <button type="button" className={styles.cancel} onClick={onClose}>
                        İptal
                      </button>
                      <button type="submit" disabled={commentValue.length < 1}>
                        Gönder
                      </button>
                    </div>
                  </form>
                </Stack>
              </section>
            </section>
          ))}  */}

        {/* <div className={styles.postTitle}>Post Your Comment</div>
        <section className="p-2">
          <div className={clsx('row d-flex align-items-center', styles.postComment)}>
            <form className={styles.postComment__form}>
              <textarea
                id="body"
                name="body"
                placeholder="Yorumunu buraya yazabilirsin"
                className={styles.postComment__textarea}
                value={formik.values.body}
                onChange={formik.handleChange}
              />
              <Icon name="edit" size={22} className={styles.postComment__icon} />
            </form>
          </div>
          <Button variant="dark" size="lg" className={styles.commentButton} onClick={formik.handleSubmit}>
            Send Comment
          </Button>
        </section> */}
      </div>
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.number,
  detailData: PropTypes.any,
  loader: PropTypes.bool,
}
