import { CalendarDays, Camera, Check, MapPin, Shirt, Store, UsersRound } from "lucide-react";
import type { VisibilityClosetItem } from "../../data/circularServicesMock";

export const FleaMarketHero = ({ imageUrl }: { imageUrl: string }) => (
  <section className="flea-hero"><img alt="순환 플리마켓 행사" src={imageUrl} /><div><span>함께 이어 입는 하루</span><h1>순환 플리마켓</h1><p>입지 않는 옷을 필요한 사람에게 직접 이어주세요.</p></div></section>
);

export const FleaMarketStatusCard = ({ event }: { event: { date: string; place: string; capacity: number; remaining: number; fee: string; status: string } }) => (
  <section className="flea-status service-card"><header><span>{event.status}</span><strong>판매자 {event.capacity}팀 모집</strong></header><div><CalendarDays size={17} /><span>{event.date}</span></div><div><MapPin size={17} /><span>{event.place}</span></div><dl><div><dt>남은 자리</dt><dd>{event.remaining}팀</dd></div><div><dt>참가비</dt><dd>{event.fee}</dd></div></dl></section>
);

export const ParticipationTypeSelector = ({ selected, types, onSelect }: { selected: string; types: ReadonlyArray<{ id: string; label: string; description: string }>; onSelect: (id: string) => void }) => (
  <section className="participation-types"><h2>어떻게 참여할까요?</h2>{types.map((type) => <button className={`service-card${selected === type.id ? " is-active" : ""}`} key={type.id} onClick={() => onSelect(type.id)} type="button">{type.id === "visitor" ? <UsersRound size={20} /> : <Store size={20} />}<span><strong>{type.label}</strong><small>{type.description}</small></span>{selected === type.id ? <Check size={17} /> : null}</button>)}</section>
);

export const FleaMarketApplyForm = ({ type }: { type: string }) => (
  <section className="flea-form service-card"><h2>참가 정보를 알려주세요</h2><label><span>닉네임</span><input defaultValue="초록옷장" /></label><label><span>{type === "visitor" ? "방문 예정 시간" : "연락처"}</span><input defaultValue={type === "visitor" ? "오후 2시" : "010-1234-5678"} /></label>{type !== "visitor" ? <><label><span>가져올 의류 개수</span><input defaultValue="8" type="number" /></label><label><span>주요 카테고리</span><select defaultValue="상의"><option>상의</option><option>하의</option><option>아우터</option><option>잡화</option></select></label><label><span>한 줄 소개</span><textarea defaultValue="오래 아껴 입은 빈티지 셔츠와 재킷을 가져가요." rows={2} /></label><button className="mock-upload" type="button"><Camera size={17} />판매·교환 예정 사진 추가</button></> : <label><span>관심 카테고리</span><select defaultValue="아우터"><option>상의</option><option>하의</option><option>아우터</option><option>잡화</option></select></label>}</section>
);

export const FleaMarketGuideCard = () => (
  <section className="flea-guide service-card"><h2>서로 편안한 행사를 위해</h2><ul><li>깨끗하게 세탁된 옷만 참여할 수 있어요.</li><li>심한 오염이나 파손 제품은 가져오기 어려워요.</li><li>현장 교환은 참여자끼리 충분히 확인하고 합의해요.</li><li>잇장은 안전한 공간과 기본 가이드를 제공해요.</li></ul></section>
);

export const FleaMarketClosetSelector = ({ items, selectedIds, onToggle }: { items: VisibilityClosetItem[]; selectedIds: number[]; onToggle: (id: number) => void }) => (
  <section className="service-list-section"><header><div><span>공개 가능한 내 옷장</span><h2>가져갈 옷을 미리 골라볼까요?</h2></div><strong>{selectedIds.length}개</strong></header><div className="flea-closet-row">{items.map((item) => <button className={selectedIds.includes(item.id) ? "is-selected" : ""} key={item.id} onClick={() => onToggle(item.id)} type="button"><img alt={item.name} src={item.imageUrl} /><span>{item.categoryLabel}</span><strong>{item.name}</strong><small>{item.visibility === "PUBLIC" ? "판매·교환 가능" : "친구공개"}</small></button>)}</div><p className="service-note"><Shirt size={15} />비공개 옷은 참가 목록에 표시되지 않아요.</p></section>
);

export const FleaMarketSubmitResult = ({ onReset }: { onReset: () => void }) => (
  <section className="flea-result service-card"><Check size={28} /><strong>플리마켓 참가 신청이 완료됐어요.</strong><p>행사 전 안내를 알림으로 보내드릴게요.</p><button onClick={onReset} type="button">신청 내용 다시 보기</button></section>
);
