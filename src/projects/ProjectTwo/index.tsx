import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

interface PhotoProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ProjectTwo = () => {
  const [photos, setPhotos] = useState<PhotoProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching && (photos.length === 0 || photos.length < totalCount)) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )
        .then((res) => {
          setPhotos([...photos, ...res.data]);
          setCurrentPage(currentPage + 1);
          setTotalCount(Number(res.headers["x-total-count"]));
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, photos, totalCount]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div>
      <h3>Dynamic Scroll</h3>
      {photos.map((photo: PhotoProps) => (
        <div className="photo" key={photo.id}>
          <div className="photo_title">
            {photo.id}. {photo.title}
          </div>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default ProjectTwo;
