import React from "react";
import cn from "classnames";
import styles from "./MoreCustomers.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const socials = [
  {
    title: "On our app",
    icon: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "Call 0860 10 20 43",
    icon: "phone",
    url: "https://twitter.com/ui8",
  },
  {
    title: "Email",
    icon: "whatsapp",
    url: "https://www.instagram.com/ui8net/",
  },
];

const MoreCustomers = ({ className }) => {
  return (
    <Card
      className={cn(styles.card, className)}
      title="Increase in cover"
      classTitle="title-blue"
    >
      <div className={styles.comments}>
        <div className={styles.info}>
          You can check and update your policy{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </div>
        <div className={styles.btns}>
          {socials.map((x, index) => (
            <a
              className={cn("button-stroke", styles.button)}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.icon} size="24" />
              <span>{x.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MoreCustomers;
