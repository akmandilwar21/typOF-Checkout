import Meta from  './head'
import Header from  './header'
import Footer from "./footer"

export default function layout(props: any) {
    // console.log(props);
  return (
    <div>
        <Meta />
        <Header prop={props.props} />
        <Footer prop={props.props} />
    </div>
  )
}
