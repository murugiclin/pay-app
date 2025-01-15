export interface Transaction {
  id: string;
  amount: number;
  type: 'payment' | 'loan' | 'collateral';
  status: 'pending' | 'completed' | 'failed';
  senderId: string;
  receiverId: string;
  description: string;
  createdAt: Date;
}

export interface CollateralAsset {
  id: string;
  type: 'rice';
  quantity: number; // in kg
  quality: string;
  value: number;
  ownerId: string;
  status: 'pledged' | 'released';
}