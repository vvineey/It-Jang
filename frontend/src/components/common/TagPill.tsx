type TagPillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const TagPill = ({ label, active = false, onClick }: TagPillProps) => (
  <button
    className={`tag-pill${active ? " is-active" : ""}`}
    type="button"
    onClick={onClick}
  >
    #{label}
  </button>
);

export default TagPill;
