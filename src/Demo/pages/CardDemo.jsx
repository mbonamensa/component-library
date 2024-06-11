import Card from "../../components-library-react/Card/index.js"
import CodeBox from "../components/CodeBox.jsx"


export default function CardDemo() {

    const cardDefaultCode = `
    <Card>
        <Card.Icon />
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Text>Ac tincidunt sapien vehicula erat 
            auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Text>
    </Card>
    `

    return (
        <>
            <div className="sections">
                <h2 id="card">Card</h2>
                <p>The card component provides information or prompt for performing an action, such as "click to upload".
                It come with an icon for added aesthetics and accessibility.</p>
            </div>
            <div className="sections">
            <div className="component-wrapper card-wrapper">
                <Card>
                    <Card.Icon />
                    <Card.Title>Easy Deployment</Card.Title>
                    <Card.Text>Ac tincidunt sapien vehicula erat 
                        auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card.Text>
                </Card>
            </div>
                <CodeBox code={cardDefaultCode} />
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
                                <td>children</td>
                                <td>element</td>
                                <td></td>
                                <td>specifies the children within the card component</td>
                            </tr>
                            <tr>
                                <td>bgColor</td>
                                <td>string</td>
                                <td>#f8f8ff</td>
                                <td>specifies the color of the card backgroung</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>string</td>
                                <td>25rem</td>
                                <td>defines the width of the card</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>string</td>
                                <td>auto</td>
                                <td>defines the height of the card</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}