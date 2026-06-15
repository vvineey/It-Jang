import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CollectionAddressForm,
  CollectionGuideCard,
  CollectionItemSelector,
  CollectionMethodCard,
  CollectionRewardPreview,
  CollectionSubmitResult,
} from "../components/collection/CollectionComponents";
import { unwornItems, type CollectionItem } from "../data/circularServicesMock";

const ClothingCollectionPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(unwornItems);
  const [method, setMethod] = useState("visit");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const selectedCount = items.filter((item) => item.selected).length;

  const submit = () => {
    if (selectedCount < 5) {
      setError("수거는 5벌부터 신청할 수 있어요.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return <main className="screen service-screen collection-screen">
    <header className="service-page-header"><button onClick={() => navigate(-1)} title="뒤로가기" type="button"><ArrowLeft size={19} /></button><div><span>옷장 순환</span><h1>의류 수거 신청</h1><p>입지 않는 옷을 필요한 곳으로 이어보세요.</p></div></header>
    {submitted ? <CollectionSubmitResult onHistory={() => setSubmitted(false)} /> : <>
      <CollectionGuideCard />
      <CollectionItemSelector items={items} onConditionChange={(id, condition) => setItems((current) => current.map((item) => item.id === id ? { ...item, condition } : item))} onToggle={(id) => setItems((current) => current.map((item) => item.id === id ? { ...item, selected: !item.selected } : item))} />
      <CollectionMethodCard onSelect={setMethod} selected={method} />
      <CollectionAddressForm />
      <CollectionRewardPreview items={items} />
      {error ? <p className="service-error">{error}</p> : null}
      <button className="service-primary-button" onClick={submit} type="button"><Send size={18} />수거 신청하기</button>
    </>}
  </main>;
};

export default ClothingCollectionPage;
