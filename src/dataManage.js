let exportPostData;
let exportCommentData

export const savePostData = (data) => {
    exportPostData = data;
}

export const bringPostData = () => {
    return exportPostData;
}

export const saveCommentData = (data) => {
    exportCommentData = data;
}

export const bringCommentData = () => {
    return exportCommentData;
}