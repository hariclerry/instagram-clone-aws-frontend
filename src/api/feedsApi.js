import { apiEndpoint } from "../config";
import Axios from "axios";

export async function getFeeds(idToken){

  const response = await Axios.get(`${apiEndpoint}/feeds`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
  return response.data.items;
}

export async function createFeed(
  idToken,
  newFeed
){
  const response = await Axios.post(
    `${apiEndpoint}/feeds`,
    JSON.stringify(newFeed),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
  return response.data.item;
}

export async function patchFeed(
  idToken,
  feedId,
  updatedFeed,
){
  await Axios.patch(
    `${apiEndpoint}/feeds/${feedId}`,
    JSON.stringify(updatedFeed),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
}

export async function deleteFeed(
  idToken,
  feedId
) {
  await Axios.delete(`${apiEndpoint}/feeds/${feedId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
  });
}

export async function getUploadUrl(idToken, imageUrl) {
         const response = await Axios.post(
           `${apiEndpoint}/feeds/attachment/${imageUrl}`,
           "",
           {
             headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${idToken}`,
             },
           }
         );
         return response.data.uploadUrl;
       }

export async function uploadFile(
  uploadUrl, file
){
  await Axios.put(uploadUrl, file);
}
