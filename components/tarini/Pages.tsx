export default function Pages(props: any) {
  const data = props.props;
  return (
    <div
      className="page-content p-10"
      dangerouslySetInnerHTML={{ __html: data.page_content }}
    ></div>
  );
}
