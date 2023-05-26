function PhotosListItem({photo}) {
    return (
      <div className="relative m-2">
          <img className="h-20 w-20" alt="random pic" src={photo.url}/>
      </div>
    );
}

export default PhotosListItem;