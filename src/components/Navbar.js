import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import { useRouter } from "next/navigation";
import { DatabaseOutlined, HeartOutlined, MailOutlined, ProjectOutlined, RobotOutlined, SearchOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import Link from "next/link";

function Navbar({ isResponsive }) {

    const router=useRouter();

    const productLinks = {
        "AI Sales Agent": [{
            icon: <MailOutlined />,
            heading: 'Response Generation',
            description: 'Perfectly crafted AI response at your finger tips'
        },
        {
            icon: <SearchOutlined />,
            heading: 'Enterprise Search',
            description: 'Find right information at the right time,every time'
        },
        {
            icon: <HeartOutlined />,
            heading: 'Personalization',
            description: 'Give your responses a WOW factor with easy personalisation'
        },

        ],
        "Modern Collaborations": [
            {
                icon: <RobotOutlined />,
                heading: 'SlhubAI',
                description: 'Meeting SLHUB AI,your AI Sales Engineer'
            },
            {
                icon: <ProjectOutlined />,
                heading: 'Project Management',
                description: 'Experience Effortless Project Management'
            },
            {
                icon: <DatabaseOutlined />,
                heading: 'Smart Respository',
                description: 'Unlock AI:Powered repository instantly'
            },
        ],
    }

    const company = {
        "about": [
            {
                icon: <UserOutlined />,
                heading: 'About',
                description: 'Learn how Slhub is shifting the future of AI'
            },
        ]
    }


    const companyItems = [
        {
            key: 2,
            label: (
            <div onClick={()=>router.push('/about')} className="dropdown-nav-grid">
                <div>
                    {/* <p className="nav-dropdown-title">AI Sales Agent</p> */}
                    <div className="footer-list-container">
                        {company["about"]?.map((d, i) =>
                            <div key={`${d?.heading}-${i}`} className="footer-list-items">
                                <div className="header-link-wrapper">
                                    <div className="header-link-item-wrapper">{d?.icon}</div>
                                    <div>
                                        <div className="header-link-heading">{d?.heading}</div>
                                        <div className="header-link-description">{d?.description}</div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>)
        }
    ]

    const items = [
        {
            key: '1',
            label: (
                <div className="dropdown-nav-grid">
                    <div>
                        <p className="nav-dropdown-title">AI Sales Agent</p>
                        <div className="footer-list-container">
                            {productLinks["AI Sales Agent"]?.map((d, i) =>
                                <div key={`${d?.heading}-${i}`} className="footer-list-items">
                                    <div className="header-link-wrapper">
                                        <div className="header-link-item-wrapper">{d?.icon}</div>
                                        <div>
                                            <div className="header-link-heading">{d?.heading}</div>
                                            <div className="header-link-description">{d?.description}</div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                    <div>
                        <p className="nav-dropdown-title">Use-cases</p>
                        <div className="footer-list-container">
                            {productLinks["Modern Collaborations"]?.map((d, i) =>
                                <div key={`${d?.heading}-${i}`} className="footer-list-items">
                                    <div className="header-link-wrapper">
                                        <div className="header-link-item-wrapper">{d?.icon}</div>
                                        <div>
                                            <div className="header-link-heading">{d?.heading}</div>
                                            <div className="header-link-description">{d?.description}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="main-content-container">
            {!isResponsive && <UnorderedListOutlined size={'xl'} />}
            <div className="navigation-bar">
                
                {isResponsive &&
                    <div className="horizontal-nav-container">
                                    <Link href="/" className="header-logo-link left w-nav-brand" aria-label="home"><img loading="eager" src="/img/robot.svg" alt="logo techbit" width={45} /></Link>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <div className="hierarchical-flex-container">
                                    <p className="primary-text-style">Product</p>
                                    <SvgIcon1 className="svg-container" />
                                </div>
                            </a>
                        </Dropdown>

                        <div className="hierarchical-flex-container">
                            <p className="primary-text-style">Solutions</p>
                            <SvgIcon2 className="svg-container1" />
                        </div>
                        <div className="hierarchical-flex-container">
                            <p className="primary-text-style">Resources</p>
                            <SvgIcon3 className="svg-container1" />
                        </div>
                        <Dropdown menu={{ items: companyItems }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <div className="hierarchical-flex-container">
                                    <p className="primary-text-style">Company</p>
                                    <SvgIcon4 className="svg-container2" />
                                </div>
                            </a>
                        </Dropdown>
                    </div>}
                <div className="login-demo-section">
                    <p className="login-heading">Login</p>
                    {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
                    <Button className="demo-button-style">Book a Demo</Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
