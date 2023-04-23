import Link from "next/link";
import { useRouter } from "next/router";
import { getSelectedId, setSelectedId } from "../../allFunctions";
import Blog from "./singleBlog";

export default function Blogs(props: any) {
  const { data, commonData } = props;
  const storeId = props.commonData.store.store_id;
  const datas = props.props;

  const handleClick = (id: any) => {
    setSelectedId(id);
  };
  const { query } = useRouter();
  const slugName = query.slug;

  if (query.slug.length > 1) {
    return <Blog id={storeId} />;
  } else {
    return (
      <>
        <div
          className="w-full rounded-md bg-grey-light"
          aria-label="breadcrumb"
        >
          <ol className="flex list-reset">
            <li className="text-gray-500 hover:text-blue-500 ">
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="mx-2 text-gray-500">/</span>
            </li>
            <li className="text-gray-500 active">Blog</li>
          </ol>
          <hr className="mt-1" />
        </div>
        <main className="container py-2 mx-auto ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {datas.map((blog: any, index: any) => {
              const img_url = blog["coverimageurl"];
              return (
                <article
                  key={index}
                  className="p-2 rounded-lg shadow-lg b-2g-white"
                >
                  <Link href={`/store/blog/${blog.slug}`} rel="noopner">
                    <img
                      src={img_url}
                      alt="Blog post 1"
                      className="w-full rounded-t-lg"
                      onClick={() => {
                        handleClick(blog.blog_id);
                      }}
                    />
                  </Link>
                  <p className="mt-5 text-gray-600">
                    <Link href={`/store/blog/${blog.slug}`}>{blog.title}</Link>{" "}
                  </p>
                  <Link href="#" className="mt-5 font-bold text-blue-500">
                    Read more &rarr;
                  </Link>
                </article>
              );
            })}
          </div>
        </main>
      </>
    );
  }
}
