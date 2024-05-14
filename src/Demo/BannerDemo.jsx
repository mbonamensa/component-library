import Banner from "../components/Banner/Banner"
import CodeBox from "./CodeBox"


export default function BannerDemo() {

    const neutralCode = `
    <Banner>Update available</Banner>
    `

    const multiLineNeutralCode = `
    <Banner subLabel="Check your inbox for available updates.">
        Update available
    </Banner>
    `
    const successCode = `
    <Banner status="success">Congratulations!</Banner>
    `
    const multiLineSuccessCode = `
    <Banner 
        status="success" 
        subLabel="You have successfully subscribed to monthly yoga!"
    >
        Congratulations!
    </Banner>
    `

    return (
        <>
            <div className="sections">
                <h2 id="banner">Banner</h2>
                <p>Banners provide prominent messages and announcements across your site.
                They come in two styles: single line and multi-line.</p>
            </div>
            <div className="sections">
                <h3>Neutral</h3>
                <p>Has a blue as theme color and represents general information prompts. 
                The single line neutral banner is the default banner type.</p>
                <div className="component-wrapper">
                    <Banner>Update available</Banner>
                </div>
                <CodeBox code={neutralCode} />
                <p>You can use the multi-line banner when you have extra text to add to your prompt.</p>
                <div className="component-wrapper">
                    <Banner subLabel="Check your inbox for available updates.">
                        Update available
                    </Banner>
                </div>
                <CodeBox code={multiLineNeutralCode} />
            </div>
            <div className="sections">
                <h3>Success</h3>
                <p>Has a green as theme color and represents successful prompts. 
                It also has single and multi-line components.</p>
                <div className="component-wrapper">
                    <Banner status="success">Congratulations!</Banner>
                </div>
                <CodeBox code={successCode} />
                <p>Multi-line banner for success</p>
                <div className="component-wrapper">
                    <Banner 
                        status="success" 
                        subLabel="You have successfully subscribed to monthly yoga!"
                    >
                        Congratulations!
                    </Banner>
                </div>
                <CodeBox code={multiLineSuccessCode} />
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
                                <td>specifies the main text of the banner as inner text</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td>string</td>
                                <td></td>
                                <td>specifies the main text of the banner as an attribute/prop</td>
                            </tr>
                            <tr>
                                <td>status</td>
                                <td>string</td>
                                <td>neutral</td>
                                <td>specifies the theme of the banner</td>
                            </tr>
                            <tr>
                                <td>subLabel</td>
                                <td>string</td>
                                <td></td>
                                <td>specifies the sub label of the banner for multi-line banners</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>string</td>
                                <td></td>
                                <td>defines the width of the banner</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>string</td>
                                <td></td>
                                <td>defines the height of the banner</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}