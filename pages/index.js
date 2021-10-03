import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router';
import useTheme from '../hooks/useTheme';

export default function Home() {

  const {themes, setTheme, currentTheme} = useTheme();

  const handleInput = (e) => {
    e.preventDefault();
    const id = currentTheme.id;
    const value = event.target.querySelector('#input').value
    if (!value) {
      alert("Please enter a name!")
      return
    }
    if(currentTheme == 1) Router.push(value) // If the theme is default blue then push to '/{name}'
    else Router.push(`/${value}?color=${id}`) // If the theme is not default then will push to '/{name}?color={id}
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create a Birthday Wish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Create a <span className={styles.span}>Birthday</span> Wish
          </h1>
        </div>
        {/* Theme Color  */}
        <div>
          <form className={styles.theme} id='theme-input' onChange={(e)=>setTheme(e.target.id)}>
              {themes.map(item => (<input key={item.id} type='radio' className={item.name} id={item.id} name='theme' value={item.color} />))}      
          </form>
        </div>
        <div>
          <form className={styles.form} onSubmit={handleInput}>
            <input id='input' name="go" className={styles.input} placeholder="Enter name of the person" />
            <button className={styles.button} type="submit">Go!</button>
          </form>
          <p className={styles.desc}>
            Crafted by <a className={styles.span} href="https://github.com/gouravkhunger" target="_blank" rel="noreferrer">Gourav</a>.
          </p>
        </div>
      </main>
    </div>
  )
}

