import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	timelineOppositeContentClasses,
} from '@mui/lab';
import useLoc from '../../../hooks/useLoc';
import { AppScreen } from '../../../shared/pages/AppScreen';
import useTimelinePageView from '../TimelinePageView';
import { Card } from '@mui/material';
import { RGBA } from '../../../utils/color/RGBA';
import { resolveCurrencySymbol } from '../../../utils/currency';
import { AppIcon } from '../../../shared/Icon';
import { getRandomIcon } from '../../../utils/icons';
import { formatDate } from '../../../utils/time';

const TimelinePage: React.FC = () => {
	const loc = useLoc();
	const { transactions, theme } = useTimelinePageView();
	return (
		<AppScreen title={loc.sTimeline} showSectionTitle>
			<Timeline
				position='right'
				sx={{
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.2,
					},
				}}
			>
				{transactions.map((transaction) => {
					const color = new RGBA(
						transaction.type === 'expense'
							? theme.palette.error.main
							: theme.palette.success.main
					);
					return (
						<TimelineItem key={transaction.id}>
							<TimelineOppositeContent
								style={{
									color: 'gray',
								}}
							>
								{/* Format the transaction timestamp like "4th June 2023, 04:63 PM" */}
								{/* {timeAgo(new Date(transaction.timestamp))} */}
								{formatDate(
									new Date(transaction.timestamp),
									'dd m yyyy, hh:|mm a'
								)}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot
									// variant='outlined'
									// color={transaction.type === 'expense' ? 'error' : 'success'}
									color='info'
									style={{
										opacity: 0.5,
									}}
								>
									{AppIcon(getRandomIcon(), {
										style: {
											fontSize: '1.5rem',
										},
									})}
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Card
									variant='outlined'
									style={{
										// backgroundColor: color.withOpacity(0.1),
										color: color.withOpacity(0.5),
										// color: 'gray',
										paddingLeft: '1.5rem',
										position: 'relative',
									}}
								>
									<div
										style={{
											position: 'absolute',
											left: '0.5rem',
											top: '50%',
											transform: 'translateY(-50%)',
											height: '80%',
											width: '0.2rem',
											borderRadius: '1rem',
											backgroundColor: color.withOpacity(0.5),
										}}
									/>
									<h3>{transaction.title}</h3>
									<p>{`${resolveCurrencySymbol(transaction.currency)} ${
										transaction.amount
									}`}</p>
									<div
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											justifyContent: 'flex-start',
											alignItems: 'center',
											marginTop: '0.5rem',
										}}
									>
										{transaction.categories.map((cat) => (
											<Card
												// variant='outlined'
												//
												style={{
													padding: '0.2rem 0.5rem',
													marginRight: '0.5rem',
													borderRadius: '0.5rem',
												}}
											>
												<span
													style={{
														// color: color.withOpacity(0.7),
														color: 'gray',
													}}
												>
													{cat}
												</span>
											</Card>
											// <Badge
											// 	key={cat}
											// 	sx={{ marginRight: '0.5rem' }}
											// 	badgeContent={cat}
											// 	color='primary'
											// />
										))}
									</div>
								</Card>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</Timeline>
		</AppScreen>
	);
};

export default TimelinePage;
