import {GoTrashcan} from "react-icons/go";
import {useRemoveAlbumMutation} from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";


function AlbumList({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = (
        <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum} >
            <GoTrashcan/>
        </Button>
        {album.title}
    </>
    );

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos will be here
        </ExpandablePanel>
    )
}


export default AlbumList;