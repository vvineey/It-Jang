import { Check, PackageCheck, Recycle, Shirt, Sparkles, Truck } from "lucide-react";
import type { CollectionItem } from "../../data/circularServicesMock";

export const CollectionGuideCard = () => (
  <section className="collection-guide service-card">
    <div><Recycle size={23} /><div><strong>옷을 필요한 곳으로 이어요</strong><p>깨끗한 옷은 재사용되고, 어려운 옷은 소재에 맞게 재활용돼요.</p></div></div>
    <dl><div><dt>수거 가능</dt><dd>의류 · 가방 · 신발</dd></div><div><dt>수거 불가</dt><dd>젖은 옷 · 심한 오염 · 큰 파손</dd></div><div><dt>최소 수량</dt><dd>5벌 이상</dd></div><div><dt>예상 리워드</dt><dd>500P~</dd></div></dl>
  </section>
);

export const CollectionItemSelector = ({
  items,
  onConditionChange,
  onToggle,
}: {
  items: CollectionItem[];
  onConditionChange: (id: number, condition: CollectionItem["condition"]) => void;
  onToggle: (id: number) => void;
}) => (
  <section className="service-list-section">
    <header><div><span>내 옷장에서 선택</span><h2>수거할 옷을 골라주세요</h2></div><strong>{items.filter((item) => item.selected).length}벌</strong></header>
    <div className="collection-item-list">{items.map((item) => <article className={`collection-item service-card${item.selected ? " is-selected" : ""}`} key={item.id}>
      <button aria-label={`${item.name} 선택`} onClick={() => onToggle(item.id)} type="button">{item.selected ? <Check size={15} /> : null}</button>
      <img alt={item.name} src={item.imageUrl} />
      <div><span>{item.category} · {item.daysUnworn}일째 안 입음</span><strong>{item.name}</strong><small>마지막 착용 {item.lastWorn}</small>
        <select aria-label={`${item.name} 상태`} onChange={(event) => onConditionChange(item.id, event.target.value as CollectionItem["condition"])} value={item.condition}>
          <option>좋음</option><option>보통</option><option>손상 있음</option>
        </select>
      </div>
    </article>)}</div>
  </section>
);

export const CollectionMethodCard = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (method: string) => void;
}) => {
  const methods = [
    ["visit", "방문 수거", "지정한 날짜에 수거 파트너가 방문해요."],
    ["store", "편의점 택배", "가까운 편의점에서 직접 발송해요."],
    ["flea", "플리마켓 직접 전달", "오프라인 행사장에서 직접 전달해요."],
  ];
  return <section className="collection-method service-card"><h2>수거 방식을 골라주세요</h2>{methods.map(([id, label, description]) => <button className={selected === id ? "is-active" : ""} key={id} onClick={() => onSelect(id)} type="button"><Truck size={17} /><span><strong>{label}</strong><small>{description}</small></span></button>)}</section>;
};

export const CollectionAddressForm = () => (
  <section className="collection-form service-card">
    <h2>수거 정보를 알려주세요</h2>
    <label><span>주소</span><input defaultValue="서울 성북구 잇장로 12" /></label>
    <label><span>연락처</span><input defaultValue="010-1234-5678" /></label>
    <label><span>희망 수거일</span><input defaultValue="2026-06-24" type="date" /></label>
    <label><span>요청사항</span><textarea defaultValue="현관 앞에 둘게요." rows={2} /></label>
  </section>
);

export const CollectionRewardPreview = ({ items }: { items: CollectionItem[] }) => {
  const selected = items.filter((item) => item.selected);
  const reusable = selected.filter((item) => item.condition !== "손상 있음").length;
  const recycle = selected.length - reusable;
  return <section className="collection-reward service-card"><div><Sparkles size={20} /><span>예상 리워드</span><strong>{selected.length * 100}P</strong></div><p>선택한 {selected.length}벌 중 {reusable}벌은 재사용, {recycle}벌은 재활용될 수 있어요.</p><small>검수 결과에 따라 실제 리워드는 달라질 수 있어요.</small></section>;
};

export const CollectionSubmitResult = ({ onHistory }: { onHistory: () => void }) => (
  <section className="collection-result service-card" aria-live="polite"><PackageCheck size={30} /><strong>수거 신청이 완료됐어요.</strong><p>수거가 완료되면 리워드가 지급돼요.</p><button onClick={onHistory} type="button">신청 내역 보기</button></section>
);

export const CollectionEmptyState = ({ onCloset }: { onCloset: () => void }) => (
  <section className="service-empty service-card"><Shirt size={25} /><strong>아직 수거할 옷이 없어요.</strong><span>옷장에서 입지 않는 옷을 먼저 골라보세요.</span><button onClick={onCloset} type="button">내 옷장 보러가기</button></section>
);
