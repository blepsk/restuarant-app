export const Post = ({ posts, searchTerm }) => {
  return (
    <div className="grid-container">
      {posts.map((data, key) => {
        return (
          <div className="stock-container" key={key}>
            <div className="content-header">
              <img className="place-photo" src={data.profile_image_url} alt="place-img" />
              <div className="place">
                {data.name}

                <ul className="time-and-rating">
                  <li>
                    {data.operation_time[0].time_open} A.M. - {data.operation_time[0].time_close} P.M.
                  </li>
                  <li style={{ float: 'right' }}>⭐ {data.rating}</li>
                </ul>
              </div>
            </div>
            <div className="food-container">
              <img className="food1" src={data.images[0]} alt="food-img1" />
              <img className="food2" src={data.images[1]} alt="food-img2" />
              <img className="food3" src={data.images[2]} alt="food-img3" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
