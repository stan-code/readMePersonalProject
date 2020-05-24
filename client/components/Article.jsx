import React from 'react'
import {Link} from 'react-router-dom'


class Article extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        thumbnailImage: "/images/beyond.png",
        author: "Grace",
        title: "BTT"
      },
      {
        id: 2,
        thumbnailImage: "/images/bezos.png",
        author: "Jeff",
        title: "Amazon"
      },
      {
        thumbnailImage: "/images/corona.png",
        id: 3,
        author: "Virus",
        title: "Covid"
      }

    ]
  }


  // componentDidMount() {
  //   request.get('/api/v1/Articles/')
  //     .then(res => {
  //       this.setState(
  //         {
  //           articles: res.body
  //         }
  //       )
  //       console.log(res.body)
  //     })

  // }

  render() {
  return(
  <>
  <div className="articleHeader">

<Link to="./Profile">
<img src="images/dp.png" draggable="false"/>
</Link>
<div className="articleHeaderAccountInfo">
<h1 className="articleHeaderAccountName">name</h1> 
<h2 className="articleHeaderSubCount">25M subscribers</h2>
</div>
<div className="articleMeta">

<div className="articleMetaItem">
<img src="images/articleViews.png" draggable="false"/>
<h3 className="articleMetaText">250k</h3>
</div>

<div className="metaVertical"></div>

<div className="articleMetaItem">
<img src="images/articleClock.png" draggable="false"/>
<h3 className="articleMetaText">15min</h3>
</div>

<div className="metaVertical"></div>

<div className="articleMetaItem">
<img src="images/articleLikes.png" draggable="false"/>
<h3 className="articleMetaText">1.2k</h3>
</div>

<div className="metaVertical"></div>

<div className="articleMetaItem">
<img src="images/articleDislike.png" draggable="false"/>
<h3 className="articleMetaText">244</h3>
</div>

</div>
  </div>
  <div className="articleContent">
    <h1 className="articleTitle">Planet Earth 2055: A Journey Into The Future</h1>
    <div className="articleBanner">
<img src="images/articleBanner.png"/>
</div>
<h2 className="articleTextContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis ac lectus eget semper. Sed ullamcorper tempor tincidunt. Sed pellentesque nisi nisi, ac volutpat nibh efficitur et. Sed eu ligula ante. Cras ut felis et sapien efficitur suscipit non eu quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel nisi at ex auctor fermentum. Quisque vel consectetur neque, sit amet tempus orci.

Nullam sed lectus leo. Donec eget lectus nulla. Nam et massa in quam pellentesque lacinia. Nam fringilla, lacus vitae aliquam ullamcorper, metus turpis interdum nibh, vitae tempor elit velit eu nisi. Morbi porttitor non augue vitae efficitur. Nulla pharetra turpis eget lectus vulputate egestas. Nam nec velit lobortis, ultricies lorem vel, gravida nisi. Etiam faucibus mi eget nisl hendrerit, a mollis velit malesuada. Quisque varius a dolor at viverra. Maecenas aliquam interdum elit ac fringilla.

Nullam at erat sed tellus semper dignissim ut a arcu. Sed ut augue ac nulla interdum congue sed hendrerit magna. Nulla ornare mollis magna vel rhoncus. Curabitur maximus eget velit tempus congue. Vestibulum ullamcorper euismod luctus. Integer nunc sem, rutrum ut ante vitae, consectetur consequat turpis. Quisque varius elit id mauris dictum, vel volutpat metus luctus. Quisque accumsan vel mauris id sodales. Etiam odio mauris, lacinia a eros vitae, varius sollicitudin enim. Vestibulum lectus quam, rhoncus vitae ultricies nec, dignissim quis velit. Praesent sed leo eget eros sollicitudin tristique. Aenean posuere ullamcorper nisl, sit amet volutpat eros convallis sed. Vivamus accumsan ultricies ex eget tempor. Mauris pulvinar urna vel mi vehicula, quis suscipit lorem iaculis.

Praesent iaculis auctor leo, eu viverra orci luctus non. Donec ultricies viverra sollicitudin. Suspendisse eu ultrices arcu, eu molestie felis. Aenean et magna vehicula, consectetur libero non, pretium tellus. Morbi id turpis purus. Sed cursus ex ac dictum semper. Nam condimentum, nulla ut lobortis convallis, dui turpis porta lorem, vitae maximus orci arcu a arcu. Etiam non enim quis purus vestibulum pellentesque sit amet in orci. Vivamus a dapibus elit. Phasellus molestie cursus consequat. Integer id euismod augue. Suspendisse consequat sapien et gravida sodales. Curabitur nec elit erat. Vestibulum euismod sit amet purus eget fringilla. Phasellus iaculis id odio ut aliquet. Integer dictum posuere elementum.

Nulla dapibus facilisis dolor malesuada lobortis. Integer euismod, sapien ut commodo posuere, justo urna placerat urna, eu efficitur turpis lorem non risus. Donec sagittis augue porta vehicula rhoncus. Pellentesque laoreet nisl molestie ligula pellentesque posuere. Etiam posuere commodo dolor vitae ullamcorper. Etiam mattis orci in velit viverra, vel finibus dolor aliquam. Nam nec velit in lectus hendrerit dignissim. Maecenas vel accumsan justo. Nunc varius nibh metus, in suscipit purus tempus suscipit. Vivamus congue pharetra ante, nec viverra arcu volutpat sed. Nunc semper mattis nunc sed euismod. Praesent vehicula pulvinar quam sit amet tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in pellentesque lorem, nec varius diam.</h2>
</div>
  </>
  )
  }
}

export default Article