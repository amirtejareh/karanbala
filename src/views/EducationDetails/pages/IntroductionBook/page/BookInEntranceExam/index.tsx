import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import EducationDetailStore from "../../../../../../stores/educationDetailStore";
import useGetBookIntroBasedOnBooksAndType from "../../../../../../hooks/book-intro/useGetBookIntroBasedOnBooksAndType";

const BookInEntranceExam = () => {
    const { book } = EducationDetailStore();
    const [bookDetails, setBookDetails] = useState<any>();
    const getBookIntroBasedOnBooksAndType = useGetBookIntroBasedOnBooksAndType(
        [book],
        "BookInEntranceExam",
    );
    useEffect(() => {
        if (getBookIntroBasedOnBooksAndType.data && !getBookIntroBasedOnBooksAndType.isLoading) {
            setBookDetails(getBookIntroBasedOnBooksAndType.data);
        }
    }, [getBookIntroBasedOnBooksAndType.data]);

    return (
        <Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {bookDetails && bookDetails.length > 0 && (
                <Box
                    controls
                    maxWidth={"427px"}
                    height={"341px"}
                    borderRadius={"5px"}
                    component={"video"}
                >
                    <Box component={"source"} src={bookDetails[0]?.videos[0]?.link}></Box>
                </Box>
            )}
        </Box>
    );
};

export default BookInEntranceExam;
