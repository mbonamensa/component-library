import TestimonialPlain from "../components/TestimonialPlain/TestimonialPlain"
import TestimonialWithImage from "../components/TestimonialWithImage/TestimonialWithImage"
import CodeBox from "./CodeBox"


export default function TestimonialDemo() {

    const TestimonialWICode = `
    <TestimonialWithImage>
    <TestimonialWithImage.Content>
        <TestimonialWithImage.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed urna nulla vitae laoreet augue. Amet feugiat est 
        integer dolor auctor adipiscing nunc urna, sit.
        </TestimonialWithImage.Text> 
        <TestimonialWithImage.Footer>
            <TestimonialWithImage.Name>May Andersons</TestimonialWithImage.Name>
            <TestimonialWithImage.Role>Workcation CTO</TestimonialWithImage.Role>
        </TestimonialWithImage.Footer>
    </TestimonialWithImage.Content>
    </TestimonialWithImage>
    `

    const TestimonialPlainCode = `
    <TestimonialPlain>
    <TestimonialPlain.Content>
        <TestimonialPlain.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed urna nulla vitae laoreet augue. Amet feugiat est 
        integer dolor auctor adipiscing nunc urna, sit.
        </TestimonialPlain.Text> 
        <TestimonialPlain.Footer>
            <TestimonialPlain.Name>May Andersons</TestimonialPlain.Name>
            <TestimonialPlain.Role>Workcation CTO</TestimonialPlain.Role>
        </TestimonialPlain.Footer>
    </TestimonialPlain.Content>
</TestimonialPlain>
    `

    return (
        <>
            <div className="sections">
                <h2 id="testimonial">Testimonial</h2>
                <p>Enhance your site credibility with testimonials, showcasing user reviews, quotes, or endorsements.</p>
            </div>
            <div className="sections">
                <h3>With Image</h3>
                <div className="testimonial-wrapper">

                    <TestimonialWithImage>
                        <TestimonialWithImage.Content>
                            <TestimonialWithImage.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed urna nulla vitae laoreet augue. Amet feugiat est 
                            integer dolor auctor adipiscing nunc urna, sit.
                            </TestimonialWithImage.Text> 
                            <TestimonialWithImage.Footer>
                                <TestimonialWithImage.Name>May Andersons</TestimonialWithImage.Name>
                                <TestimonialWithImage.Role>Workcation CTO</TestimonialWithImage.Role>
                            </TestimonialWithImage.Footer>
                        </TestimonialWithImage.Content>
                    </TestimonialWithImage>
                </div>
                <CodeBox code={TestimonialWICode} />
            </div>
            <div className="sections">
                <h3>With Image Props</h3>
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
                                <td>specifies the child elements of the main component</td>
                            </tr>
                            <tr>
                                <td>img</td>
                                <td>string</td>
                                <td></td>
                                <td>specifies the image source to be used</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="sections">
                <h3>Plain</h3>
                <div className="testimonial-wrapper tw-plain">

                    <TestimonialPlain>
                        <TestimonialPlain.Content>
                            <TestimonialPlain.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed urna nulla vitae laoreet augue. Amet feugiat est 
                            integer dolor auctor adipiscing nunc urna, sit.
                            </TestimonialPlain.Text> 
                            <TestimonialPlain.Footer>
                                <TestimonialPlain.Name>May Andersons</TestimonialPlain.Name>
                                <TestimonialPlain.Role>Workcation CTO</TestimonialPlain.Role>
                            </TestimonialPlain.Footer>
                        </TestimonialPlain.Content>
                    </TestimonialPlain>
                </div>
                <CodeBox code={TestimonialPlainCode} />
            </div>
            <div className="sections">
                <h3>Plain Props</h3>
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
                                <td>specifies the child elements of the main component</td>
                            </tr>
                            <tr>
                                <td>img</td>
                                <td>string</td>
                                <td></td>
                                <td>specifies the image source to be used</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}