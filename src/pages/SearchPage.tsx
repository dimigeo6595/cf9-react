import {useSearchParams} from "react-router";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const page = searchParams.get("page");

    return (
        <>
            <h1 className="text-center">Tex Results</h1>
            <p><strong>Query: {query}</strong></p>
            <p><strong>Page: {page}</strong></p>
        </>
    )
}
export default SearchPage;