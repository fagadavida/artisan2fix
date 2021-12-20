import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward, UpdateTwoTone } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featureddMoneyContainer">
          <span className="featuredMoney">$2,4155</span>
          <span className="featurdMoneyRate">
            -11.8 <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featureddMoneyContainer">
          <span className="featuredMoney">$2,4155</span>
          <span className="featurdMoneyRate">
            -11.8 <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featureddMoneyContainer">
          <span className="featuredMoney">$8,4155</span>
          <span className="featurdMoneyRate">
            -11.8 <UpdateTwoTone />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featureddMoneyContainer">
          <span className="featuredMoney">$8,4155</span>
          <span className="featurdMoneyRate">
            -11.8 <ArrowUpward />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
    </div>
  );
}
