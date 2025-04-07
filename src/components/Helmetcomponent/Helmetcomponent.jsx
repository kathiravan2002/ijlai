import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IJLAI, International Journal of Leadership and Innovation,Entrepreneurship, Business Growth, entrepreneurship, business innovation, leadership research, innovation studies, academic journal, scholarly research, leadership theory, innovation policy, global leadership, innovation management, team leadership, innovation strategy, leadership development, creative leadership, business leadership, innovation trends, transformational leadership, decision making, organizational behavior, leadership education" />
    <meta name="description" content="IJLAI publishes high-quality research in leadership, management, and innovation, promoting interdisciplinary insights and global academic exchange." />
    <meta name="author" content="IJLAI Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Journal of Leadership and Innovation " />
    <meta property="og:description" content="IJLAI publishes high-quality research in leadership, management, and innovation, promoting interdisciplinary insights and global academic exchange." />
    <meta property="og:url" content="https://www.ijlai.com/" />
    <meta property="og:image" content="https://ijlai.com/assets/logo.png" />

    <link rel="canonical" href="https://www.ijlai.com/" />
    <link rel="icon" type="image/svg+xml" href="/assets/Fav.png" />
  </Helmet>
  );
};

export default Helmetcomponent;