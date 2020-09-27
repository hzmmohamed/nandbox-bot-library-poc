"use strict";
const fs = require("fs");
const axios = require("axios");
const path = require("path");
const mime = require("mime");

module.exports = class MediaTransfer {
  constructor() {
    console.log(getConfigs);
    // TODO: throw new illegalStateException("utility class");
  }

  /**
   * downloadFile it will return 0 when file saved successfully
   */

  /**
   * @param token
   *            Bot API Token to be used to download the file
   * @param mediaFileId
   *            Media File Id to be download e.g. photoId , VideoId,....
   * @param savingDirPath
   *            null to save it in current directory or the local directory path
   *            to save file
   * @param savingFileName
   *            null to save downloaded media with name mediaId or a file name be
   *            used to save the downloaded media .
   * @return 0 in success case , -1: if failed to download the media
   */
  static downloadFile(
    token,
    mediaFileId,
    savingDirPath,
    savingFileName,
    downloadServerURL
  ) {
    var result = -1;

    try {
      const downloadStartTime = new Date().getTime();
      savingDirPath = savingDirPath != null ? savingDirPath : "./"; // If savingDirPath is null , assuming current Directory
      const mediaFileFullPath = savingDirPath + "/" + savingFileName;
      const file = fs.createWriteStream(mediaFileFullPath);

      axios({
        url: downloadServerURL + mediaFileId,
        method: "GET",
        timeout: 40000,
        responseType: "stream",
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
          //'Authorization': 'Bearer ' + token
        },
      })
        .then((response) => {
          response.data.pipe(file);
          const downloadEndTime = new Date().getTime();

          file.on("finish", (resolve) => {
            console.log(
              "Download File : " +
                mediaFileId +
                " took around " +
                (downloadEndTime - downloadStartTime) / 1000 +
                " Seconds"
            );
            console.log("File Saved Locally Successfully");
            result = 0;
          });
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(new Error().stack);
      console.log(e);
    } finally {
      console.log("Result = " + result);
      return result;
    }
  }

  /**
   * @param token
   *            Bot API Token to be used to download the file
   * @param mediaFileFullPath
   *            local directory path to upload the file
   * @return Upload File it will return Attachment as string
   */
  static uploadFile(token, mediaFileFullPath, uploadServerURL) {
    let media = null;

    const file = fs.createReadStream(mediaFileFullPath);
    const { size } = fs.statSync(mediaFileFullPath);
    const fileContentType = mime.getType(mediaFileFullPath);
    const reqCon = {
      url: uploadServerURL + path.basename(mediaFileFullPath),
      method: "PUT",
      timeout: 40000,
      // TODO: socket timeout?
      headers: {
        "Content-Type": fileContentType,
        "Content-Length": size,
        "X-TOKEN": token,
        //'Authorization': 'Bearer ' + token,
      },
      transformRequest: [
        (data, headers) => {
          // Do whatever you want to transform the data

          return data;
        },
      ],
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      },
      data: file,
    };
    console.log("fileContentType " + fileContentType);
    const uploadStartTime = new Date().getTime();
    let storemedia = axios(reqCon)
      .then((response) => {
        media = response.data.file;
        const uploadEndTime = new Date().getTime();
        console.log(
          "Upload File : " +
            media +
            " took around " +
            (uploadEndTime - uploadStartTime) / 1000 +
            " Seconds"
        );
        console.log("File Saved Locally Successfully");
        console.log("Uploaded Media File ID is : " + media);
        return media;
      })
      .catch((e) => console.log(e));

    return storemedia;
  }
};
