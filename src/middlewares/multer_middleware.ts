import multer from "multer";

const upload = multer({ dest: "files" });

export default upload.fields([{name: "path", maxCount: 1}, {name: "file", maxCount: 1}]);