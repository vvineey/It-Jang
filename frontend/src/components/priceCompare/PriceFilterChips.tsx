type PriceFilterChipsProps = {
  activePlatform: string;
  filters: string[];
  platforms: string[];
  sorts: string[];
};

const PriceFilterChips = ({ activePlatform, filters, platforms, sorts }: PriceFilterChipsProps) => (
  <section className="price-filter-section" aria-label="가격 비교 필터">
    <div className="price-chip-row">
      {platforms.map((platform) => (
        <button className={platform === activePlatform ? "is-active" : ""} key={platform} type="button">
          {platform}
        </button>
      ))}
    </div>
    <div className="price-chip-row">
      {[...filters, ...sorts].map((filter, index) => (
        <button className={index === filters.length ? "is-active" : ""} key={filter} type="button">
          {filter}
        </button>
      ))}
    </div>
  </section>
);

export default PriceFilterChips;
