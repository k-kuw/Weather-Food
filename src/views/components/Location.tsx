import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLocation } from "../../redux/reducers/locationSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const GetGiocode = () => {
  // formに必要なものを分割代入
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({ defaultValues: { location: "" } });

  // 検索された地域のstate用dispatch定義
  const dispatch = useAppDispatch();

  // Giocodeのapi取得できたか確認用state
  const getGiocode = useAppSelector(
    (state) => state.reducers.locationReducer.location
  );
  const [confirmGiocode, setConfirmGiocode] =
    useState("");

  // 動的ルーティング用state
  const [giocodeName, setGiocodeName] = useState("");

  // Giocode取得、取得可否によりvalidation設定
  const locationSubmit = (data: {location: string}) => {
    //レシピ情報api取得(Reduxから取得したcategoryId使用)
    const getGiocodeData = async () => {
      const giocodeData = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${data.location}&limit=1&appid=6c443236acc04da21c71a330f1d6366e&lang=ja`
      );
      const _getGiocode = await giocodeData.json();

      if (_getGiocode.length === 0) {
        setConfirmGiocode(
          "地名を見つけられませんでした、別の名前で検索してみてね！\n（漢字、英語入力等お試しください）"
        );
      } else {
        if (_getGiocode[0].local_names) {
          if (_getGiocode[0].local_names.ja) {
            setConfirmGiocode(
              `~${_getGiocode[0].local_names.ja}~で設定しました！`
            );
            setGiocodeName(_getGiocode[0].local_names.ja);
          } else setConfirmGiocode(`~${_getGiocode[0].name}~で設定しました！`);
          setGiocodeName(_getGiocode[0].name);
        } else {
          setConfirmGiocode(`~${_getGiocode[0].name}~で設定しました！`);
          setGiocodeName(_getGiocode[0].name);
        }
        dispatch(setLocation(_getGiocode));
      }
    };
    getGiocodeData();
  };

  return (
    <div className="text-center info">
          <h2 className="text-info">『地域設定』</h2>
      <Form onSubmit={handleSubmit(locationSubmit)}>
        <div>
          <Form.Label className="location-margin">自分の住んでいる地名を入力してください( ◠‿◠ )</Form.Label>
          <Form.Control
            id="location"
            {...register("location", {
              required: { value: true, message: "" },
            })}
            className="input-location w-75"
          />

          {errors.location?.message &&
            typeof errors.location.message === "string" && (
              <div className="location-margin">{errors.location.message}</div>
            )}
        </div> 
        <Button disabled={!isDirty} variant={"outline-info"} type="submit" value={"検索"} className="location-margin " data-testid="submit">
          検索
        </Button>
      </Form>
      <h2 className="text-info">{confirmGiocode}</h2>
      {getGiocode[0].country !== "loading" && (
        <Link to={`WeatherFood/${giocodeName}`} className="location-margin link">おすすめ料理へ→</Link>
      )}
    </div>
  );
};

export default GetGiocode;
