# NextJS Mastery Repository
NextJS의 기초, 개념, 이론 등 전반을 마스터하기 위한 종합 자료 모음입니다.

## Project Structure
1. **[App Router Code](https://github.com/hongwontae/NextJS/tree/main/App-Router-Code)** : NextJS APP Router 코드
2. **[Pages Router Code](https://github.com/hongwontae/NextJS/tree/main/Pages-Router-Code)**: NextJS Pages Router 코드
3. **[NextJS Memo](https://github.com/hongwontae/NextJS/tree/main/NextJS-Memo)** : 1,2에 NextJS 코드에 대한 설명 텍스트 파일
4. **[NextJS Theory](https://github.com/hongwontae/NextJS/tree/main/NextJS-Theory)** : NextJS 이론에 대한 텍스트 파일
5. **[NextJS Summary](https://github.com/hongwontae/NextJS/tree/main/NextJS-Summary)** : NextJS 연습과 부가 설명에 대한 코드와 텍스트 파일


## App Router Main Concpets
1. **NextJS Concept** : [NextJS Info](https://github.com/hongwontae/NextJS/blob/main/NextJS-Memo/App%20Router/1-APP-Router/1-1.%20NextJS-theory.txt)
2. **App Router Concept and High** : [App Router Concept Info](https://github.com/hongwontae/NextJS/tree/main/NextJS-Memo/App%20Router/1-APP-Router), [App Router High](https://github.com/hongwontae/NextJS/tree/main/NextJS-Memo/App%20Router/2-App-Router%2B)
3. **Data Fetching** : [Data Fetching Info](https://github.com/hongwontae/NextJS/blob/main/NextJS-Memo/App%20Router/3-Data-Fetching/3-1.DataFeching.txt)
4. **Caching** : [Caching Info](https://github.com/hongwontae/NextJS/tree/main/NextJS-Memo/App%20Router/5-Caching)
5. **Optimization** : [Optimization Info](https://github.com/hongwontae/NextJS/tree/main/NextJS-Memo/App%20Router/6-App-Optimization)
6. **Authentication** : [Authentication Info](https://github.com/hongwontae/NextJS/blob/main/NextJS-Memo/App%20Router/7-Authentication/7-1.Authentication.txt)

- **Preview(Data Fetching)**
```javascript
import Rocket from "@/image/rocket.png";
import Image from "next/image";
const DATA = [
  {
    id: 1,
    title: "Hello AND Fail",
  },
  {
    id: 2,
    title: "Looser sailter",
  },
  {
    id: 3,
    title: "Whose that",
  },
];

async function About() {

  const data = await fetch('http://localhost:8080/ar');
  console.log(await data.json());
  console.log('about')

  return (
    <>
      <h1 className="text-center text-4xl mt-10 mb-5">About Page</h1>
      <div className="flex justify-center">
        {/* Image 컴포넌트에 width과 height이 존재하지 않으면 원래 사진의 width과 height으로 크기가 결정 */}
        <Image src={Rocket} alt="Rocket Image" width={100} height={100}></Image>
      </div>

      <div className="grid grid-cols-3 text-center mt-10 text-[1.5rem] text-red-500">
        {DATA.map((ele) => {
          return <div key={ele.id}>{ele.title}</div>;
        })}
      </div>
    </>
  );
}

export default About;
```


## Pages Router Main Concepts
1. 