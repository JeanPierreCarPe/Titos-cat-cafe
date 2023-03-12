import { MemoryCard, Title } from 'components';
import React from 'react'
import './home-memories.css'

const HomeMemories = () => {
  const memoriesData = [
    {
      title: "Celebracion dia del pancake",
      picture:
        "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
    },
    {
      title: "Adopción de Figaro",
      picture:
        "https://images.unsplash.com/photo-1609847214764-eb745f0178a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Dia de las luces",
      picture:
        "https://images.unsplash.com/photo-1542108226-9130e1e83cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80",
    },
    {
      title: "Evento chill like a cat",
      picture:
        "https://images.unsplash.com/photo-1571570703598-39eb580a0329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      title: "Adopcion de Felix",
      picture:
        "https://images.unsplash.com/photo-1593275722710-2648cf4b47d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    },
    {
      title: "Apertura de nueva sede",
      picture:
        "https://images.unsplash.com/photo-1613274554329-70f997f5789f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    },
  ];

  return (
    <div className="home-memories">
      <Title
        style={{ width: "auto", alignItems: "center", color:"#FBFBFB", fontSize:"var(--header-size-large)" }}
        text="Recuerdos"
      />
      <div className="home-memories-content">
        {memoriesData.map((item, index) => {
          return (
            <MemoryCard
              key={index}
              text={item.title}
              style={{
                background: `url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeMemories