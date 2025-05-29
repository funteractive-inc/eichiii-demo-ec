"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NEXT_PUBLIC_API_BASE_URL } from "@/lib/env";
import { sampleOrderMessageXML } from "@/lib/sample-order-message-xml";
import { encodeXML } from "@/lib/utils";

export default function EcTestScreen() {
  const handleOrderConfirm = () => {
    const encoded = encodeXML(sampleOrderMessageXML);

    const form = document.createElement("form");
    form.action = `${NEXT_PUBLIC_API_BASE_URL}/punchout/order-message/test`;
    form.method = "POST";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "cxml";
    input.value = encoded;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              旅行パッケージ予約
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="font-semibold text-lg">パッケージプラン</div>

              {/* 新幹線セクション */}
              <div className="p-4 border rounded-lg bg-blue-50">
                <div className="font-medium text-base mb-2 text-blue-800">
                  新幹線
                </div>
                <div className="space-y-1 text-sm">
                  <div>• 新幹線指定席（東京 → 大阪）: 22,000円</div>
                  <div className="ml-4">出発日: 2025-03-30</div>
                  <div className="ml-4">予約番号: TRAIN-RES-0002</div>
                  <div className="ml-4">数量: 1</div>
                </div>
              </div>

              {/* ホテルセクション */}
              <div className="p-4 border rounded-lg bg-green-50">
                <div className="font-medium text-base mb-2 text-green-800">
                  ホテル
                </div>
                <div className="space-y-1 text-sm">
                  <div>
                    • ホテル東京宿泊 2泊（2025/03/30〜2025/04/01）: 28,000円
                  </div>
                  <div className="ml-4">予約番号: HOTEL-RES-0001</div>
                  <div className="ml-4">チェックイン: 2025-03-30</div>
                  <div className="ml-4">チェックアウト: 2025-04-01</div>
                  <div className="ml-4">数量: 1</div>
                </div>
              </div>

              <Separator />
              <div className="text-lg font-bold">合計: 50,000円</div>
            </div>

            <div className="pt-4">
              <Button
                onClick={handleOrderConfirm}
                className="w-full h-12 text-lg font-semibold"
                size="lg"
              >
                注文を確定する
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
