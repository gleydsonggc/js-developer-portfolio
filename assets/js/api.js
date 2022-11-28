const url = "/data/profile.json";

const fetchJson = async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();  
    return response;
  } catch (error) {
    console.log(error);
  }
 };

async function fetchProfileData() {
    return await fetchJson();
}
