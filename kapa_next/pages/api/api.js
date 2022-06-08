export async function fetcher(url, options = {}){
  let response;

  if(!options){
    response = await fetch(url);
  }
  else {
    response = await fetch(url, options);
  }

  response = await response.json();
  return response;
}
