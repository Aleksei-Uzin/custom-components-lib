import styles from './colorDemo.module.css'

type ColorDemoType = {
  name: string
  value: string
  background: string
}

export const ColorDemo = ({ name, background, value }: ColorDemoType) => (
  <div
    className={styles.colorBox}
    style={{
      background,
    }}
    title="Click to copy this color's value"
    onClick={() => navigator.clipboard.writeText(background)}
  >
    <div>{name}</div>
    <div>{value}</div>
  </div>
)
