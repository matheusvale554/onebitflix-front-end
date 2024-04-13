import HeaderAuth from "@/components/common/headerAuth";
import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { Button, Container } from "reactstrap";
import PageSpinner from "@/components/common/spinner";
import EpisodeList from "@/components/episodeList";
import Footer from "@/components/common/footer";


const CoursePage = function () {
  const router = useRouter();
  const { id } = router.query;

  const [course, setCourse] = useState<CourseType>();
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const getCourse = async function () {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);
    if (res.status === 200) {
      setCourse(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);
  const courseId = Number(id);
  const handleLikeCourse = async () => {
    if (liked === true) {
      await courseService.removeLike(courseId);

      setLiked(false);

    } else {

      await courseService.like(courseId);

      setLiked(true);
    }
  };
  const handleFavCourse = async () => {
    if (favorited === true) {
      await courseService.removeFav(courseId);
      console.log(id)
      setFavorited(false);
    } else {
      await courseService.addToFav(courseId);
      console.log(id)
      setFavorited(true);
    }
  };
  if (course === undefined) return <PageSpinner />;
  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div style={{
          backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
	  url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
        }}>
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
          <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false} >
            ASSISTIR AGORA!
            <img
              src="/buttonPlay.svg"
              alt="buttonImg"
              className={styles.buttonImg}
            />
          </Button>
          <div className={styles.interactions}>
            {liked === false ? (
              <img
                src="/course/iconLike.svg"
                alt="likeImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            ) : (
              <img
                src="/course/iconLiked.svg"
                alt="likedImage"
                className={styles.interactionImages}
                onClick={handleLikeCourse}
              />
            )}
            {favorited === false ? (
              <img
                onClick={handleFavCourse}
                src="/course/iconAddFav.svg"
                alt="addFav"
                className={styles.interactionImages}
              />
            ) : (
              <img
                onClick={handleFavCourse}
                src="/course/iconFavorited.svg"
                alt="favorited"
                className={styles.interactionImages}
              />
            )}
          </div>
        </Container>
        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISODIOS</p>
          <p className={styles.episodeLength}>{course?.episodes?.length} Episodios
          </p>
          {course?.episodes?.length === 0 ? (
	<p>
	  <strong>Não temos episódios ainda, volte outra hora! &#x1F606;&#x1F918;</strong>
  </p>
) : (
	course?.episodes?.map((episode) => (
	  <EpisodeList key={episode.id} episode={episode} />
  ))
)}
        </Container>
        <Footer/>
      </main>
    </>
  );
};

export default CoursePage;