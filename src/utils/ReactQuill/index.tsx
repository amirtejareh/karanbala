import React from "react";
import ReactQuill, { Quill } from "react-quill";
const RichTextEditor = ({ value, setValue }) => {
    return (
        <ReactQuill
            className="quill_fontFamily"
            formats={[
                "",
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "formula",
                "image",
                "color",
                "size",
                "video",
                "align",
                "background",
                "direction",
                "code-block",
                "code",
            ]}
            modules={{
                toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["video", "link", "image", "formula"],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ align: "right" }, { align: "center" }, { align: "" }, { align: "justify" }],

                    [
                        {
                            color: ["#000000", "#ff0000", "rgb(0, 0, 255)", "red", "blue"],
                        },
                        {
                            background: ["#ffffff", "#ffcc00", "#00ff00", "#0000ff"],
                        },
                    ],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    ["blockquote", "code-block"],
                    ["clean"],
                ],
            }}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    );
};

export default RichTextEditor;
