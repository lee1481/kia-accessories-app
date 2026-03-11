-- 정산 관련 컬럼 추가
ALTER TABLE reports ADD COLUMN is_settled INTEGER DEFAULT 0;
ALTER TABLE reports ADD COLUMN settled_label TEXT;
ALTER TABLE reports ADD COLUMN settled_at DATETIME;
