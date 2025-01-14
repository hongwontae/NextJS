/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
const nextConfig = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env : {
        mongodb_username : 'wontae',
        mongodb_password : 'koala3121',
        mongodb_clustername : 'kkk',
        mongobb_database : 'my-site'
      }
    }
  }

  return {
    env : {
      mongodb_username : 'wwww'
    }
  }

};

export default nextConfig;
