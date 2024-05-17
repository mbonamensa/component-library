import Badge from "../components-library-react/Badge/Badge"
import CodeBox from "./CodeBox"


export default function BadgeDemo() {

    const defaultCode = `
    <Badge>Hello</Badge>
    `

    const roundedSquareCode = `
    <Badge shape="pill">Hello</Badge>
    `
    const pillCode = `
    <Badge shape="pill">Hello</Badge>
    `
    const colorCode = `
    <Badge shape="roundedSquare" color="gray">Gray</Badge>
    <Badge shape="roundedSquare" color="red">Red</Badge>
    <Badge shape="roundedSquare" color="emerald">Emerald</Badge>
    <Badge shape="roundedSquare" color="blue">Blue</Badge>
    <Badge shape="roundedSquare" color="indigo">Indigo</Badge>
    <Badge shape="roundedSquare" color="purple">Purple</Badge>
    <Badge shape="roundedSquare" color="pink">Pink</Badge>
    `

    return (
        <>
            <div className="sections">
                <h2 id="badge">Badge</h2>
                <p>Use badges to add additional markup to your content to show status or highlight key information.
                They come in three shapes: default, roundedSquare, and pill.</p>
            </div>
            <div className="sections">
                <h3>Default</h3>
                <Badge>Hello</Badge>
                <CodeBox code={defaultCode} />
            </div>
            <div className="sections">
                <h3>Rounded Square</h3>
                <Badge shape="roundedSquare">Hello</Badge>
                <CodeBox code={roundedSquareCode} />
            </div>
            <div className="sections">
                <h3>Pill</h3>
                <Badge shape="pill">Hello</Badge>
                <CodeBox code={pillCode} />
            </div>
            <div className="sections">
                <h3>Colors</h3>
                <p>The available colors for this component are: gray, red, amber, emerald, 
                blue, indigo, purple, and pink </p>
                <div className="badge-color-container">
                    <Badge shape="roundedSquare" color="gray">Gray</Badge>
                    <Badge shape="roundedSquare" color="red">Red</Badge>
                    <Badge shape="roundedSquare" color="emerald">Emerald</Badge>
                    <Badge shape="roundedSquare" color="blue">Blue</Badge>
                    <Badge shape="roundedSquare" color="indigo">Indigo</Badge>
                    <Badge shape="roundedSquare" color="purple">Purple</Badge>
                    <Badge shape="roundedSquare" color="pink">Pink</Badge>
                </div>
                <CodeBox code={colorCode} />
            </div>
            <div className="sections">
                <h3>Props</h3>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="bg-radius-l">Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th className="bg-radius-r">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>shape</td>
                                <td>string</td>
                                <td>square</td>
                                <td>specifies the shape of the badge</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>string</td>
                                <td>gray</td>
                                <td>specifies the both background and text color of the badge</td>
                            </tr>
                            <tr>
                                <td>textColor</td>
                                <td>string</td>
                                <td>square</td>
                                <td>specifies the color of the text</td>
                            </tr>
                            <tr>
                                <td>bgColor</td>
                                <td>string</td>
                                <td>square</td>
                                <td>specifies the background color of the badge</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>string</td>
                                <td>square</td>
                                <td>defines the width of the badge</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>string</td>
                                <td>square</td>
                                <td>defines the height of the badge</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}