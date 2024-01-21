import styles from './TodayInfo.module.css';
import { LuWind } from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';
import { FaThermometerThreeQuarters } from 'react-icons/fa';
import { RiThunderstormsLine } from 'react-icons/ri';


import { getWeather } from '../../api/weather';
import { useEffect, useState } from 'react';

function TodayInfo() {

	const [text , setText ] = useState('');
	const [dateTime , setDateTime] = useState('');
	

	useEffect(()=>{
		return async ()=>{
			const {current:weather} =  await getWeather();
			const dateTime = weather.last_updated;
			console.log(dateTime)
			setText(weather.condition);
			setDateTime(dateTime)
			
		}
	},[])

	return (
		<section className={`${styles.todayInfo} border-radius--17`}>
			<div className={styles.timeDateContainer}>
				<p className={styles.todayDate}>2-20-2023</p>
				<p className={styles.currentTime}>7:35 PM</p>
			</div>
			<div className={styles.weatherContainer}>
				<div className={styles.subContainer}>
					<RiThunderstormsLine
						className={`${styles.weatherIcon} icon`}
					/>
					<p className={styles.subContainer__text}>Heavy rain</p>
				</div>
				<hr />
				<div className={styles.subContainer}>
					<p className={styles.temperature}>
						24 &deg;<span>C</span>
					</p>
					<div className={styles.subContainer__box}>
						<FaThermometerThreeQuarters
							className={` ${styles.subContainer__icon} icon`}
						/>
						<div>
							<p className={styles.subContainer__text}>
								1001 mbar
							</p>
							<p className={styles.subContainer__text}>
								Pressure
							</p>
						</div>
					</div>
				</div>
				<hr />
				<div className={styles.subContainer}>
					<div className={styles.subContainer__box}>
						<LuWind
							className={` ${styles.subContainer__icon} icon`}
						/>
						<div>
							<p className={styles.subContainer__text}>
								3.7 km/hr
							</p>
							<p className={styles.subContainer__text}>Wind</p>
						</div>
					</div>
					<div className={styles.subContainer__box}>
						<WiHumidity
							className={` ${styles.subContainer__icon} icon`}
						/>
						<div>
							<p className={styles.subContainer__text}>83%</p>
							<p className={styles.subContainer__text}>
								Humidity
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TodayInfo;
