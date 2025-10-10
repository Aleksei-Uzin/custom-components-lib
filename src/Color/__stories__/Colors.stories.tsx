import cx from 'classnames'
import { ColorDemo } from './ColorDemo'
import styles from './colorDemo.module.css'
import '../Color.variables.css'

export const Colors = () => (
  <>
    <div>
      <h2>Neutral Colors</h2>
      <div className={cx(styles.colorsGroup, styles.neutralColorsGroup)}>
        <ColorDemo background="var(--colorWhitePrimary)" name="White Primary" value="#fff" />
        <ColorDemo background="var(--colorWhiteSecondary)" name="White Secondary" value="#f4f4f4" />
        <ColorDemo background="var(--colorGrayPrimary)" name="Gray Primary" value="#ddd" />
      </div>
    </div>
    <div>
      <h2>Text Colors</h2>
      <div className={styles.colorsGroup}>
        <ColorDemo background="var(--colorTextPrimary)" name="Primary" value="#18181b" />
        <ColorDemo background="var(--colorTextSecondary)" name="Secondary" value="#27272a" />
        <ColorDemo background="var(--colorTextTertiary)" name="Tertiary" value="#3f3f46" />
      </div>
    </div>
    <div>
      <h2>Action Colors</h2>
      <div className={styles.colorsGroup}>
        <ColorDemo background="var(--colorInfo)" name="Info" value="#006fee" />
        <ColorDemo background="var(--colorSuccess)" name="Success" value="#17c964" />
        <ColorDemo background="var(--colorWarning)" name="Warning" value="#f5a524" />
        <ColorDemo background="var(--colorAlert)" name="Alert" value="#f31260" />
      </div>
    </div>
    <div>
      <h2>Action Colors in hover state</h2>
      <div className={styles.colorsGroup}>
        <ColorDemo background="var(--colorInfoHover)" name="Info" value="#0057bb" />
        <ColorDemo background="var(--colorSuccessHover)" name="Success" value="#129b4d" />
        <ColorDemo background="var(--colorWarningHover)" name="Warning" value="#dc8c0a" />
        <ColorDemo background="var(--colorAlertHover)" name="Alert" value="#c80a4c" />
      </div>
    </div>
  </>
)

export default {
  component: Colors,
  tags: ['autodocs'],
  title: 'Colors',
}
