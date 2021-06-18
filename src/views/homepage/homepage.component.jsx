import React, {useState, useEffect} from 'react';
import FilterPeriod from '../../components/filter-period/filter-period.component';
import SkuCard from '../../components/sku-card/sku-card.component'
import {useDispatch, useSelector} from 'react-redux';
import {fetchCartData} from '../../redux/cart/cart.action';
import './homepage.styles.scss'
import SalesReport from '../../assets/Sales Turnover.svg'
import menuBar from '../../assets/more.svg'
import arrowDown from '../../assets/DownArrow.svg'
import help from '../../assets/Help.png'
import Chart from '../../components/chart/chart.component';

export default function HomePage() {
    const [salesReport, setSalesReport] = useState({
        profit: '3,600,000',
        persentasi: '13'
    })
    const dispatch = useDispatch()
    const shopData = useSelector(state => state.cart.cartData)
    useEffect(() => {
        dispatch(fetchCartData())
        console.log(shopData)
    }, [dispatch] ) 


    return (
        <>
            <div className='homepage'>
                <div className='head-home'>
                    <h1 style={{color:'#707070C4', fontWeight:'bold'}}>Dashboard</h1>
                    <div className='filter-period'><FilterPeriod/></div>
                </div>
                <div className='market-insight'>
                    <h2 style={{fontWeight:'bold'}}>Market Insight</h2>
                    <div className='help'>
                        <img src={help} alt="" />
                        <a style={{color:'#fff', fontSize:'12px', borderBottom:'1px solid #fff'}} href="">Click Here for Help</a>
                    </div>
                </div>
                <div className='sales-report'>
                    <div className='title'>
                        <p>Sales Turnover</p>
                        <a href=""><img style={{width:'10px'}} src={menuBar} alt="" /></a>
                    </div>
                    <div className='container'>
                        {
                            salesReport ? 
                            <div className='subtitle'>
                                <h4>Rp {salesReport.profit}</h4>
                                <div className='report-text'>
                                    <img style={{width:'10px'}} src={arrowDown} alt="" /> 
                                    <p style={{fontSize:'12px'}}> <span style={{color:'red', fontWeight:'bold'}}>{salesReport.persentasi}%</span> last period in product sold</p>
                                </div>
                            </div>
                            :
                            ''
                        }
                        <img style={{width:'32px'}} src={SalesReport} alt="" />
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='container-chart'>
                        <Chart className='chart'/>
                    </div>
                    <div className='container-card'>
                        <div className='title-card'>
                            <h4 style={{color:'#4D4F5C'}}>BEST SELLING SKU</h4>
                            <img style={{width:'10px'}} src={menuBar} alt="" />
                        </div>
                        {
                            shopData['Search']?.filter((item, idx) => idx < 4).map((data, index) =>(
                                // console.log(data.Year + '99999999999999999')
                                <SkuCard key={index} carCart={data} />
                            ))
                        }
                    </div>
                    <div className='container-card'>
                        <div className='title-card'>
                            <h4 style={{color:'#4D4F5C'}}>TOP COMPETITOR SKU</h4>
                            <img style={{width:'10px'}} src={menuBar} alt="" />
                        </div>
                        {
                            shopData['Search']?.filter((item, idx) => idx < 4).map((data, index) =>(
                                // console.log(data.Year + '99999999999999999')
                                <SkuCard key={index} carCart={data} />
                            ))
                        }
                    </div>
                </div>
            </div>   
        </>
    )
}