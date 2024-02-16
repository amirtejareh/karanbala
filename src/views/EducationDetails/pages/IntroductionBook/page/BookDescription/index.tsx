import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EducationDetailStore from "../../../../../../stores/educationDetailStore";
import useGetBookIntroBasedOnBooksAndType from "../../../../../../hooks/book-intro/useGetBookIntroBasedOnBooksAndType";
import { Player, BigPlayButton } from "video-react";

const BookDescription = () => {
    const { book } = EducationDetailStore();
    const [bookDetails, setBookDetails] = useState<any>();
    const getBookIntroBasedOnBooksAndType = useGetBookIntroBasedOnBooksAndType(
        [book],
        "bookDescription",
    );
    useEffect(() => {
        if (getBookIntroBasedOnBooksAndType.data && !getBookIntroBasedOnBooksAndType.isLoading) {
            setBookDetails(getBookIntroBasedOnBooksAndType.data);
        }
    }, [getBookIntroBasedOnBooksAndType.data]);

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            {bookDetails && bookDetails.length > 0 && (
                <Player
                    controls
                    borderRadius={"5px"}
                    width={1000}
                    src={bookDetails[0]?.videos[0]?.link}
                    fluid={false}
                >
                    <BigPlayButton position="center" />
                </Player>
            )}
        </Box>
    );
};

export default BookDescription;
