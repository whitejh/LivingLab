import useCustomTip from "../../hooks/useCustomTip";
import SearchComponent from "../../components/common/SearchComponent";

const ListComponent = () => {
  const {moveToAdd} = useCustomTip();

    return(
      <>
      <SearchComponent/>
      <table className="min-w-full text-center text-lg font-light text-surface dark:text-white">
        <thead className="border-b-2 border-neutral-500 font-semibold dark:border-white/10">
          <tr>
            <th scope="col" className="w-2/12 py-4">카테고리</th>
            <th scope="col" className="w-1/12 py-4">좋아요수</th>
            <th scope="col" className="w-6/12 py-4">제목</th>
            <th scope="col" className="w-1/12 py-4">날짜</th>
            <th scope="col" className="w-2/12 py-4">작성자</th>
          </tr>
        </thead>
        <tbody>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer">
              <td className="whitespace-nowrap py-4">인테리어</td>
              <td className="whitespace-nowrap py-4">10</td>
              <td className="whitespace-nowrap py-4">글 제목입니다</td>
              <td className="whitespace-nowrap py-4">2024-06-02</td>
              <td className="whitespace-nowrap py-4">유저1</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer">
              <td className="whitespace-nowrap py-4">부동산</td>
              <td className="whitespace-nowrap py-4">2</td>
              <td className="whitespace-nowrap py-4">글 제목입니다</td>
              <td className="whitespace-nowrap py-4">2024-06-02</td>
              <td className="whitespace-nowrap py-4">유저2</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer">
              <td className="whitespace-nowrap py-4">부동산</td>
              <td className="whitespace-nowrap py-4">5</td>
              <td className="whitespace-nowrap py-4">글 제목입니다</td>
              <td className="whitespace-nowrap py-4">2024-06-01</td>
              <td className="whitespace-nowrap py-4">유저3</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer">
              <td className="whitespace-nowrap py-4">할인정보</td>
              <td className="whitespace-nowrap py-4">13</td>
              <td className="whitespace-nowrap py-4">글 제목입니다</td>
              <td className="whitespace-nowrap py-4">2024-06-01</td>
              <td className="whitespace-nowrap py-4">유저1</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer">
              <td className="whitespace-nowrap py-4">할인정보</td>
              <td className="whitespace-nowrap py-4">7</td>
              <td className="whitespace-nowrap py-4">글 제목입니다</td>
              <td className="whitespace-nowrap py-4">2024-05-31</td>
              <td className="whitespace-nowrap py-4">유저2</td>
            </tr>
            <tr
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer">
              <td className="whitespace-nowrap py-4">인테리어</td>
              <td className="whitespace-nowrap py-4">4</td>
              <td className="whitespace-nowrap py-4">글 제목입니다</td>
              <td className="whitespace-nowrap py-4">2024-05-30</td>
              <td className="whitespace-nowrap py-4">유저3</td>
            </tr>
          </tbody>
          <div className="text-xl">1 2 3 4 5</div>
          </table>
      <button type="button" className="float-right inline-block rounded bg-teal-400 px-6 pb-2 pt-2.5 text-base font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-teal-500 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-teal-600 motion-reduce:transition-none"
      onClick={()=>moveToAdd()}>
        글쓰기
      </button>
      </>
    );

}

export default ListComponent;