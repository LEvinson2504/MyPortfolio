import React from 'react';
import styles from './MyStuff.module.css';

const DisplayCard = (props) => {
  const {title, items} = props;
  return <div className={styles.content_card}>
    <h1 className={styles.list_title}> {title} </h1>
    <ul>
      { items.map( e => <li><h3 className={styles.list_item}>{e}</h3></li>)}
    </ul>
  </div>
}

const mystuff = [
  {
    title: "Books",
    items: [
      "Learning React",
      "Cracking The Coding Interview",
      "Eloquent Javascript",
      "Pragmatic Programmer"
    ]
  },
  {
    title: "Courses I'm taking",
    items: [
      "full stack open",
      "The Odin Project",
      "CS50X Web Development"
    ]
  }
]

const MyStuff = () => {
  return <div className={styles.container}>
    { mystuff.map( stuff => 
    <DisplayCard 
        title={stuff.title}
        items={stuff.items} 
      />)}
  </div>
}

export default MyStuff;
