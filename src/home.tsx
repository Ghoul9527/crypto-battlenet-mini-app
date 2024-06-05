import { FunctionComponent, memo } from "react";
import styles from "./home.module.css";

export type HomeType = {
    className?: string;
};

const Home: FunctionComponent<HomeType> =
    memo(({ className = "" }) => {
        return (
            <div className={[styles.groupmergeonboardingConn, className].join(" ")}>
                <div className={styles.contentArea}>
                    <div className={styles.topContentParent}>
                        <div className={styles.topContent}>
                            <div className={styles.infoCards}>
                                <div className={styles.infoCardsInner}>
                                    <img
                                        className={styles.frameChild}
                                        alt=""
                                        src="/group-307223.svg"
                                    />
                                </div>
                                <a className={styles.a}>345545</a>
                                <img
                                    className={styles.image1850Icon}
                                    loading="lazy"
                                    alt=""
                                    src="/image-1850@2x.png"
                                />
                            </div>
                        </div>
                        <div className={styles.progressArea}>
                            <div className={styles.progressElements}>
                                <div className={styles.progressCircles} />
                                <img
                                    className={styles.progressElementsChild}
                                    alt=""
                                    src="/group-48095406@2x.png"
                                />
                            </div>
                            <div className={styles.progressElements1}>
                                <div className={styles.progressElementsItem} />
                                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.middleContent}>
                    <div className={styles.graphContainerParent}>
                        <div className={styles.graphContainer}>
                            <img
                                className={styles.framConpin031}
                                loading="lazy"
                                alt=""
                                src="/fram-conpin03-1.svg"
                            />
                            <div className={styles.graphData}>
                                <div className={styles.dataPoints}>
                                    <img
                                        className={styles.dataPointIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/vector-1.svg"
                                    />
                                    <img
                                        className={styles.dataPointIcon1}
                                        alt=""
                                        src="/vector-2.svg"
                                    />
                                    <img
                                        className={styles.dataPointIcon2}
                                        alt=""
                                        src="/vector-3.svg"
                                    />
                                </div>
                                <div className={styles.div}>
                                    <img
                                        className={styles.vectorIcon1}
                                        loading="lazy"
                                        alt=""
                                        src="/vector-4.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon2}
                                        alt=""
                                        src="/vector-5.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon3}
                                        alt=""
                                        src="/vector-6.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon4}
                                        loading="lazy"
                                        alt=""
                                        src="/vector-7.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon5}
                                        alt=""
                                        src="/vector-8.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon6}
                                        alt=""
                                        src="/vector-9.svg"
                                    />
                                    <img
                                        className={styles.vectorIcon7}
                                        alt=""
                                        src="/vector-10.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.graphTitle}>
                            <div className={styles.leadingCryptoIndexContainer}>
                <span
                    className={styles.leadingCryptoIndex}
                >{`Leading Crypto Index `}</span>
                                {`>`}
                            </div>
                        </div>
                    </div>
                </div>
                <section className={styles.bottomContent}>
                    <div className={styles.separator1} />
                    <div className={styles.poolContainerWrapper}>
                        <div className={styles.poolContainer}>
                            <div className={styles.poolContainerChild} />
                            <div className={styles.poolData}>
                                <div className={styles.poolDetails}>
                                    <div className={styles.liveStatus}>
                                        <div className={styles.liveIndicator}>
                                            <img
                                                className={styles.subtractIcon}
                                                loading="lazy"
                                                alt=""
                                                src="/subtract.svg"
                                            />
                                        </div>
                                        <a className={styles.live}>LIVE</a>
                                    </div>
                                </div>
                                <div className={styles.currentPriceParent}>
                                    <img
                                        className={styles.currentPriceIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/frame@2x.png"
                                    />
                                    <div className={styles.priceValue}>
                                        <div className={styles.price}>02:10</div>
                                    </div>
                                    <div className={styles.changeValue}>
                                        <b className={styles.m}>5m</b>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rectangleParent}>
                                <div className={styles.frameItem} />
                                <div className={styles.priceLabel}>
                                    <div className={styles.labelContainer}>
                                        <div className={styles.lastPrice}>LAST PRICE</div>
                                    </div>
                                    <div className={styles.valueContainer}>
                                        <div className={styles.value}>
                                            <b className={styles.valueCalculated}>$104.2207</b>
                                        </div>
                                        <div className={styles.changeContainer}>
                                            <div className={styles.changeDirection}>
                                                <b className={styles.b}>↑$0.0934</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.changeIcon}>
                                        <img
                                            className={styles.icon1}
                                            loading="lazy"
                                            alt=""
                                            src="/vector-696.svg"
                                        />
                                    </div>
                                    <div className={styles.lockedInfo}>
                                        <div className={styles.lockedLabel}>
                                            <div className={styles.lockedPrice}>Locked Price:</div>
                                        </div>
                                        <div className={styles.lockedLabel1}>
                                            <div className={styles.div1}>$103.2205</div>
                                        </div>
                                    </div>
                                    <div className={styles.prizeLabel}>
                                        <div className={styles.labelContainer1}>
                                            <b className={styles.prizePool}>Prize Pool:</b>
                                        </div>
                                        <div className={styles.valueContainer1}>
                                            <div className={styles.value1}>
                                                <div className={styles.valueCalculated1}>
                                                    <img
                                                        className={styles.image1850Icon1}
                                                        loading="lazy"
                                                        alt=""
                                                        src="/image-1850-1@2x.png"
                                                    />
                                                    <b className={styles.b1}>688888888</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.payoutLabelsParent}>
                                <div className={styles.payoutLabels}>
                                    <b className={styles.up}>UP</b>
                                    <div className={styles.payoutValues}>
                                        <div className={styles.xPayout}>
                                            <span className={styles.x}>{`67X   `}</span>
                                            <span className={styles.payout}>Payout</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.payoutIcon}>
                                    <img
                                        className={styles.icon2}
                                        loading="lazy"
                                        alt=""
                                        src="/vector-855.svg"
                                    />
                                </div>
                                <div className={styles.payoutLabels1}>
                                    <b className={styles.down}>DOWN</b>
                                    <div className={styles.xPayoutWrapper}>
                                        <div className={styles.xPayout1}>
                                            <span className={styles.x1}>{`67X  `}</span>
                                            <span className={styles.payout1}>Payout</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.predictionBarParent}>
                    <div className={styles.predictionBar}>
                        <div className={styles.barBackground} />
                    </div>
                    <div className={styles.nextPrizeContainer}>
                        <div className={styles.nextPrizeWrapper}>
                            <div className={styles.nextPrizeWrapperChild} />
                            <div className={styles.nextPrizeContent}>
                                <div className={styles.nextPrizeBackground}>
                                    <img
                                        className={styles.subtractIcon1}
                                        loading="lazy"
                                        alt=""
                                        src="/subtract-1.svg"
                                    />
                                </div>
                                <div className={styles.nextLabelContainer}>
                                    <div className={styles.next}>NEXT</div>
                                </div>
                            </div>
                            <div className={styles.nextRoundDetails}>
                                <div className={styles.nextRoundContent}>
                                    <div className={styles.nextRoundValues}>
                                        <div className={styles.nextPrizeValues}>
                                            <img
                                                className={styles.c75410ac187a50a3019e00d0e4180fIcon}
                                                alt=""
                                                src="/c75410ac187a50a3019e00d0e4180f075aa1da7739597u4nm1d-1@2x.png"
                                            />
                                            <img
                                                className={styles.c615243f461cb78df5e453595f6394Icon}
                                                loading="lazy"
                                                alt=""
                                                src="/c615243f461cb78df5e453595f63941816b0182628704xahsk8-1@2x.png"
                                            />
                                        </div>
                                        <div className={styles.nextPrizePoolContainer}>
                                            <div
                                                className={styles.prizePool688888888}
                                            >{`Prize Pool: 688888888 `}</div>
                                        </div>
                                    </div>
                                    <div className={styles.frameParent}>
                                        <img
                                            className={styles.frameInner}
                                            loading="lazy"
                                            alt=""
                                            src="/group-48095407.svg"
                                        />
                                        <div className={styles.enterAmountInput}>
                                            <div className={styles.enterAmountInputWrapper}>
                                                <div className={styles.enterAmountInputContent}>
                                                    <div className={styles.enter}>{`Enter : `}</div>
                                                </div>
                                                <div className={styles.maxButton}>
                                                    <div className={styles.wrapper}>
                                                        <b className={styles.b2}>0</b>
                                                    </div>
                                                    <div className={styles.maxWrapper}>
                                                        <h3 className={styles.max}>
                                                            MA
                                                            <span className={styles.x2}>X</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.payoutOptionsParent}>
                                    <div className={styles.payoutOptions}>
                                        <div className={styles.payoutDirectionLabels}>
                                            <img
                                                className={styles.arrowUpIcon}
                                                loading="lazy"
                                                alt=""
                                                src="/arrowup.svg"
                                            />
                                            <b className={styles.up1}>UP</b>
                                        </div>
                                        <div className={styles.xPayout2}>0X Payout</div>
                                    </div>
                                    <div className={styles.payoutOptions1}>
                                        <div className={styles.arrowDownParent}>
                                            <img
                                                className={styles.arrowDownIcon}
                                                loading="lazy"
                                                alt=""
                                                src="/arrowdown.svg"
                                            />
                                            <b className={styles.down1}>DOWN</b>
                                        </div>
                                        <div className={styles.xPayout3}>67X Payout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    });

export default Home;
